import { stringify } from 'qs'

/*
 * convert object to json
 */
export const json = (data, headers) => {
  headers['Content-Type'] = 'application/json'

  return JSON.stringify(data)
}

/*
 * convert object to urlencoded
 */
export const url = (data, headers) => {
  headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return stringify(data)
}

/*
 * convert object to formdata
 */
export const form = (data, headers) => {
  headers['Content-Type'] = 'multipart/form-data'

  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }

  return formData
}
