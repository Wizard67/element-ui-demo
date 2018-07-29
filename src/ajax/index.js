import vue from 'vue'
import * as apiConfig from './config'

const ajax = (api, params, config) =>
  apiConfig[api]
    ? apiConfig[api](params, config)
    : vue.util.warn(`[API] ${api} not exist`, this)

export default ajax
