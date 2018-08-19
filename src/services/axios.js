import axios from 'axios'
import requestWithToken from './interceptors/requestWithToken'
import {handleRequestCancel, handleResponseCancel} from './interceptors/cancelTheSameRequest'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 20000
axios.defaults.withCredentials = true

// add a request interceptor
axios.interceptors.request.use(...requestWithToken)
axios.interceptors.request.use(...handleRequestCancel)
axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// add a response interceptor
axios.interceptors.response.use(...handleResponseCancel)
axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default axios
