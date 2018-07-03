import axios from 'axios';

axios.defaults.baseURL =
  'https://easy-mock.com/mock/5b212f773cfa8868e0eba929/element-ui-demo/';

// add a request interceptor
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// add a response interceptor
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
