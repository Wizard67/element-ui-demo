import qs from 'qs'
import axios from './axios'

const formatJson = params => params

const formatFrom = params => qs.stringify(params)

const switchFormatType = (type, params) => {
  var formatParams
  switch (type) {
    case 'json': formatParams = formatJson(params)
      break
    case 'form': formatParams = formatFrom(params)
      break
    default: break
  }
  return formatParams
}

const request = (url, method, format = 'json') => (params, config) => {
  return axios[method](url, { params: switchFormatType(format, params), config })
}

export default request
