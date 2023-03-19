import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "../../constants/routes";
import { emailValidator } from "../../functions";
import { setToken, setUser } from "../../store/action";

const DISCORD_CLIENT_ID = process.env.REACT_APP_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.REACT_APP_DISCORD_CLIENT_SECRET;
const DISCORD_OAUTH_URL = process.env.REACT_APP_DISCORD_OAUTH_URL;
const DISCORD_REDIRECT_URI = process.env.REACT_APP_DISCORD_REDIRECT_URI;
const DISCORD_SCOPES=process.env.REACT_APP_DISCORD_SCOPES

function exchangeDiscordCodeForTokens(code) {
  const url = DISCORD_OAUTH_URL;
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: DISCORD_REDIRECT_URI
  });

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  })
  .then(response => response.json())
  .then(data => {
    const access_token = data.access_token;
    const refresh_token = data.refresh_token;
    return { access_token, refresh_token };
  });
}

function handleAuthorizationCode(code, navigator, dispatcher, login) {
    exchangeDiscordCodeForTokens(code)
      .then(async(tokens) => {
        const { data } = await axios.get('https://discord.com/api/users/@me', {
          headers: {
            Authorization: `Bearer ${tokens?.access_token}`
          }
        })
        
        if(data?.email){
            const validateEmail = await emailValidator(data?.email, 'C', 'Discord')
            if(validateEmail?.valid){
              var user = {
                  "name": data?.username,
                  "email": data?.email,
                  "phone": '',
                  "password": '',
                  "confirmPassword": ''
              }

              navigator(routes.CreateAccount, { state: { initial: user, sso:  {
                "Platform": "Discord",
                "access_token": tokens?.access_token,
                "refresh_token": tokens?.refresh_token,
                "ID": data?.id
              }}});
            }
            else{
              if(validateEmail?.token && validateEmail?.user){
                dispatcher(setToken(validateEmail.token))
                dispatcher(setUser(validateEmail.user))
                login()
                navigator(routes.Feed)
              }
              else{
                toast.error('Email already exists.', {
                  position: toast.POSITION.TOP_RIGHT
                });
              }
            }
        }
      })
      .catch(error => {
        console.log('')
    });
}
async function handleDiscordLogin(){
    const authorizationUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(DISCORD_SCOPES)}`;
    window.location.href = authorizationUrl;
}

export {
    handleAuthorizationCode,
    exchangeDiscordCodeForTokens,
    handleDiscordLogin
}