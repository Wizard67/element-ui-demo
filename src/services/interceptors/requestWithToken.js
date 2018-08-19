import storage from '@/utils/storage'

const key = 'token'
export default [
  config => {
    if (storage.getItem(key)) {
      config.headers.Authorization = `token ${storage.getItem(key)}`
    }
    return config
  },
  error => Promise.reject(error)
]
