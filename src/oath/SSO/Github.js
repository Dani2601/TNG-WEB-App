


import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
import LoginGithub from 'react-login-github';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import { emailValidator } from '../../functions';
import { generateRandomNumber } from '../../helper/Random';
import { setToken, setUser } from '../../store/action';
import { useAuth } from "../../context/AuthenticationContext";
import { toast } from 'react-toastify';

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID
const GITHUB_REDIRECT_URL = process.env.REACT_APP_GITHUB_REDIRECT_URL

const GithubButton = ({small = false}) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const dispatch = useDispatch()

    const onSuccess = async(data) => {
        try{
            const response = await axios.post(`${process.env.REACT_APP_REST_API}GetGithubAccessToken`, {
                Code: data?.code
            })
    
            if(response?.data){
                const params = new URLSearchParams(response.data);
                const accessToken = params.get("access_token");
                const getData = await axios.post(`${process.env.REACT_APP_REST_API}GetGithubDetailsFromAccessToken`, {
                    AccessToken: accessToken
                })     
                if(getData?.data?.valid){
                    dispatch(setToken(getData.data.data.id))
                    dispatch(setUser(getData.data.data))
                    login()
                    navigate(routes.Home)
                }
            }
        }
        catch(e){
            console.log(e)
        }
    };
      
    const onFailure = (response) => {
      console.error(response);
    };
    
    return (
        <LoginGithub
            clientId={GITHUB_CLIENT_ID}
            redirectUri={GITHUB_REDIRECT_URL}
            onSuccess={onSuccess}
            onFailure={onFailure}
        >
            {
              small ?  
              <FaGithub className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] bg-cover bg-center"/>
              :
              <FaGithub className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] bg-cover bg-center"/> 
            }
        </LoginGithub>
    );
}

export {
    GithubButton
}