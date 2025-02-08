import React, { createContext, useContext } from 'react'
import Axios from 'axios';
import { notification } from 'antd';
import { SERVER_URL } from '../configs';
import { AuthContext } from './AuthProvider';
import { BASE_URL } from '../api';

export const AxiosContext = createContext();

const AxiosProvider = ({ children }) => {
  const { token, setLoading } = useContext(AuthContext);

  const axios = api_data => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      Axios.defaults.baseURL = SERVER_URL;
      if (token) Axios.defaults.headers.common['Authorization'] = token;
      api_data.url = BASE_URL + api_data.url;

      Axios({
        ...api_data,
        // onUploadProgress: e => {
        //   e.total;
        //   e.loaded
        // }
      })
        .then(result => {
          setLoading(false);
          result = result.data;
          if (result.message) notification[result.type]({ message: result.message });
          if (result.type === 'success') {
            resolve(result.data);
          }
          else reject(result.message);
        })
        .catch(err => {
          setLoading(false);
          reject(err.message);
        })
    })
  }

  return (
    <AxiosContext.Provider value={{ axios }}>
      {children}
    </AxiosContext.Provider>
  )
}

export default AxiosProvider