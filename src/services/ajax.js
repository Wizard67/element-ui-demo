import vue from 'vue'
import axios from './axios'
import * as apiConfig from './api'

export default (api, data) => {
  if (apiConfig[api]) {
    return axios(apiConfig[api].setApiName(api).setData(data))
  } else {
    vue.util.warn(`[services api] '${api}' not exist`)
  }
}
