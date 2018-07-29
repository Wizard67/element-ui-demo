import axios from 'axios'

axios.defaults.timeout = 10000

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
