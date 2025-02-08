/* Axios middleware */
import Axios from 'axios';
import { SERVER_URL } from '../configs'
import { notification } from 'antd';
import { BASE_URL } from '../api';

Axios.defaults.baseURL = SERVER_URL;

const axios = api_data => {
  return new Promise((resolve, reject) => {
    api_data.url = BASE_URL + api_data.url;
    Axios({
      ...api_data
    })
      .then(result => {
        result = result.data;
        if(result.message) notification[result.type]({message: result.message});
        if (result.type === 'success') {
          resolve(result.data);
        }
        else reject(result.message);
      })
      .catch(err => {
        reject(err.message);
      })
  })
}

export default axios;