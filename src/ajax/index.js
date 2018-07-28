import * as apiConfig from './config'

const ajax = (api, params, config) =>
  apiConfig[api]
    ? apiConfig[api](params, config)
    : console.error(`[API] ${api} not exist`)

export default ajax
