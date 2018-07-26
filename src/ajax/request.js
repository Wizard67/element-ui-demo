import qs from 'qs'
import axios from './axios'

const formatJson = params => params

const formatFrom = params => qs.stringify(params)

const formatFile = params => {
  const formData = new FormData()
  for (const key in params) {
    formData.append(key, params[key])
  }
  return formData
}

const switchFormatType = (type, params) => {
  var formatParams
  switch (type) {
    case 'json': formatParams = formatJson(params)
      break
    case 'form': formatParams = formatFrom(params)
      break
    case 'file': formatParams = formatFile(params)
      break
    default: break
  }
  return formatParams
}

const request = (url, method, format = 'json') => (params, ...config) => {
  return axios[method](url, { params: switchFormatType(format, params), ...config })
}

export default request
