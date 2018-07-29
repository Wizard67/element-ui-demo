import vue from 'vue'
import * as apiConfig from './api'

export const request = (api, params, config) =>
  apiConfig[api]
    ? apiConfig[api](params, config)
    : vue.util.warn(`[API] '${api}' not exist in api.js`)
