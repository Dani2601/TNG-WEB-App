import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setToken, setUser } from '../store/action';

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const dispatch = useDispatch();
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.record);
  
    useEffect(() => {
        let userToken = token;
        if (userToken != null) {
          reauthenticate(userToken);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
    }, []);
    
    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };
    
  const reauthenticate = async(auth) => {
    // temporary
    dispatch(setToken(auth));
  };

    const authContextValue = {
        login,
        loggedIn,
        logout,
        reauthenticate
    };

    return <AuthContext.Provider value={authContextValue} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export {
    AuthProvider,
    useAuth
}