import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setToken, setUser } from '../store/action';
import { reauthenticate } from '../functions';

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.record);

  useEffect(() => {
      let userToken = token;
      //console.log(userToken)
      if (userToken != null) {
        setLoading(true)
        reauthenticate(userToken)
        .then((res) => {
          if(res.valid){
            dispatch(setUser(res.user))
            dispatch(setToken(res.token))
            setLoggedIn(true);
            setLoading(false)
          }
          else{
            dispatch(setUser(null))
            dispatch(setToken(null))
            setLoggedIn(false);
            setLoading(false)
          }
        })
        .catch((e) => {
          dispatch(setUser(null))
          dispatch(setToken(null))
          setLoggedIn(false);
          setLoading(false)
        })
      } else {
        dispatch(setUser(null))
        dispatch(setToken(null))
        setLoggedIn(false);
        setLoading(false)
      }
  }, []);
  
  const login = () => {
      setLoggedIn(true);
  };

  const logout = () => {
      setLoggedIn(false);
  };

  const authContextValue = {
      login,
      loading,
      loggedIn,
      logout,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export {
    AuthProvider,
    useAuth
}