// import models from '@/models'
// import router from '@/router'
import ajax from './ajax'

export const request = (api, data) => {
  return new Promise((resolve, reject) => {
    ajax(api, data).then(result => {
      // handle result

      resolve(result.data)
    }).catch(error => {
      if (!error.response) return
      // handle error

      reject(error)
    })
  })
}
