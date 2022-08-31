import axios from 'axios';
import { message } from 'antd';

export const request = axios.create({
  baseURL: 'http://81.70.216.18:4000',
});

request.interceptors.response.use(
  function (response) {
    if (response.data.code === '20000') {
      return response.data.data;
    } else {
      message.error(response.data.message);
      return Promise.reject(new Error(response.data.message || '未知错误'));
    }
  },
  function (error) {
    message.error('未知错误');
    return Promise.reject(error);
  }
);

request.interceptors.request.use(
  function (config) {
    config.headers = { 'x-token': localStorage.getItem('token') };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
