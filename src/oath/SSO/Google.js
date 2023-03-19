// import { GoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { emailValidator } from '../../functions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import routes from '../../constants/routes';
import { useAuth } from '../../context/AuthenticationContext';
import { setToken, setUser } from '../../store/action';

async function getDataFromAccessToken(token, dispatcher, navigator, login) {
    try {
        const response = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            if(response?.data?.email){
                dispatcher(setToken(validateEmail.token))
                dispatcher(setUser(validateEmail.user))
                login()
                navigator(routes.Home)
            }
        }
    } catch (error) {
        console.error(error);
    }
}

const GoogleButton = ({small = false}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login } = useAuth()

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: tokenResponse => getDataFromAccessToken(tokenResponse?.access_token, dispatch, navigate, login),
    });

    if(small){
        return <FaGoogle onClick={handleGoogleLogin} className="cursor-pointer w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] bg-cover bg-center"/>;
    }
    else{        
        return <FaGoogle onClick={handleGoogleLogin} className="cursor-pointer w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] bg-cover bg-center"/>;
    }
}

export {
    GoogleButton
}