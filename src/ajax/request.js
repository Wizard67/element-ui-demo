import axios from './axios'

const request = (url, method, format) => params => {
  return axios[method](url, { params })
}
export default request
