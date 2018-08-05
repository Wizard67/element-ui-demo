import axios from 'axios'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 20000
axios.defaults.withCredentials = true

// cancel the same request
const pending = []
const CancelToken = axios.CancelToken
const checkPendingStatus = (config, cancel) => {
  const flag = `${config.url}&${config.method}`
  if (pending.indexOf(flag) !== -1) {
    if (cancel) {
      cancel()
    } else {
      pending.splice(pending.indexOf(flag), 1)
    }
  } else {
    if (cancel) pending.push(flag)
  }
}

// add a request interceptor
axios.interceptors.request.use(
  config => {
    config.cancelToken = new CancelToken((cancel) => {
      checkPendingStatus(config, cancel)
    })
    return config
  },
  error => Promise.reject(error)
)

// add a response interceptor
axios.interceptors.response.use(
  response => {
    checkPendingStatus(response.config)
    return response.data
  },
  error => {
    checkPendingStatus(error.config)
    return {
      status: 500,
      message: 'Internal Server Error',
      payload: error
    }
  }
)

export default axios
