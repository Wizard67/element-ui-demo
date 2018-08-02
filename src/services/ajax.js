import { stringify } from 'qs'
import pathToRegexp from 'path-to-regexp'
import axios from './axios'

const FormatType = {
  json (params, config) {
    return [params, config]
  },

  url (params, config) {
    return [stringify(params), config]
  },

  form (params, config) {
    const formData = new FormData()
    for (const key in params) {
      formData.append(key, params[key])
    }
    return [formData, config]
  }
}

export default (url, method = 'get', format = 'json') => (params, config) => {
  const keys = []
  pathToRegexp(url, keys)

  if (keys.length > 0) {
    const toPath = pathToRegexp.compile(url)
    const RESTfulUrl = toPath(params)
    return axios[method](RESTfulUrl, config)
  } else {
    return axios[method](url, ...FormatType[format](params, config))
  }
}
