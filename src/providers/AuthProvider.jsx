import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { LOCALSTORAGE_KEY, API_URL, SERVER_URL } from '../configs';
import { notification } from 'antd';
import { BASE_URL } from '../api';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(LOCALSTORAGE_KEY));
  const [isLoading, setLoading] = useState(false);

  const value = {
    auth, setAuth,
    isLoading, setLoading: (state) => {
      setLoading(state);
    },
    token, setToken: token => {
      localStorage.setItem(LOCALSTORAGE_KEY, token);
      setToken(token);
    }
  }

  const tokenLogin = async () => {
    try {
      Axios.defaults.headers.common['Authorization'] = token;
      const user = await Axios.get(SERVER_URL + BASE_URL + API_URL.auth.token);
      setAuth(user.data.data);
    } catch (err) {
      err.message && notification.error({ message: err.message });
      setAuth(null);
      localStorage.removeItem(LOCALSTORAGE_KEY);
    }
  }

  useEffect(() => {
    // if (token) {
    //   tokenLogin();
    // } else {
    //   setAuth(null);
    //   localStorage.removeItem(LOCALSTORAGE_KEY);
    // }
  }, [token])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider