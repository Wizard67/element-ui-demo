import axios from 'axios'

const CancelToken = axios.CancelToken
const getCacheName = config => `${config.url}&method=${config.method}`

// cancel the same request
const pending = {}
const checkPendingStatus = (cacheName, cancel) => {
  if (pending[cacheName]) {
    pending[cacheName](`Cancel: ${cacheName}`)
  }
  pending[cacheName] = cancel
}

export const handleRequestCancel = [
  config => {
    config.cancelToken = new CancelToken(cancel => {
      checkPendingStatus(
        getCacheName(config),
        cancel
      )
    })
    return config
  },
  error => Promise.reject(error)
]

export const handleResponseCancel = [
  response => {
    pending[getCacheName(response.config)] = null
    return response
  },
  error => Promise.reject(error)
]
