import axios from "./axios"

const request = (url, method, format) => (params) => {
  return new Promise( (resolve, reject) => {

    axios[method](url, {params}).then( ({data}) => {
      resolve(data)
    }).catch( err => {
      console.log(err)
    })

  })
}

export default request