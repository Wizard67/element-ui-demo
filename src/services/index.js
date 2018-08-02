import vue from 'vue'
import * as apiConfig from './api'

export const request = (api, params, config) => {
  if (apiConfig[api]) {
    return apiConfig[api](params, config)
  } else {
    vue.util.warn(`[API] '${api}' not exist in api.js`)
  }
}
