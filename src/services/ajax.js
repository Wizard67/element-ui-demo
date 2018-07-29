import { stringify } from 'qs'
import axios from './axios'

const FormatType = {
  json (params) {
    return params
  },

  url (params) {
    return stringify(params)
  },

  form (params) {
    const formData = new FormData()
    for (const key in params) {
      formData.append(key, params[key])
    }
    return formData
  }
}

export default (url, method = 'get', format = 'json') => (params, config) => {
  return axios[method](url, FormatType[format](params), config)
}
