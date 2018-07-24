import axios from 'axios'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5b212f773cfa8868e0eba929/element-ui-demo/'

axios.defaults.timeout = 5000

// add a request interceptor
axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// add a response interceptor
axios.interceptors.response.use(
  response => response.data,
  error => {
    return {
      status: 500,
      message: 'Internal Server Error',
      payload: error
    }
  }
)

export default axios
