import * as contentType from './contentType'
import vue from 'vue'
import pathToRegexp from 'path-to-regexp'

let apiName = 'anonymous'
let isRESTfull = false
let RESTfullParams = []

const checkRESTfullApi = (regexpArr, url) => {
  pathToRegexp(url, regexpArr)

  return regexpArr.length > 0
}

const checkRESTfullParams = (params, data) => {
  const used = []

  if (Object.keys(data).length === 0) {
    vue.util.warn(`[services api]: ${apiName} missing parameter`)
    return used
  }

  params.forEach(item => {
    data[item.name]
      ? used.push([item.name])
      : vue.util.warn(`[services api]: ${apiName} missing parameter: ${item.name}`)
  })
  return used
}

const handleRESTfullData = (urlParams, data) => {
  urlParams.forEach(item => {
    delete data[item]
  })

  return data
}

/*
 *  react axios configs
 */
class AjaxConfig {
  // url = ''
  // method = ''
  // params = {}
  // data = {}
  // transformRequest = []

  constructor (config) {
    Object.assign(this, config)
  }

  set _url (value) {
    if (!isRESTfull) {
      isRESTfull = checkRESTfullApi(RESTfullParams, value)
    }

    this.url = value
  }

  get (url) {
    this._url = url
    this.method = 'get'
    return this
  }

  delete (url) {
    this._url = url
    this.method = 'delete'
    return this
  }

  head (url) {
    this._url = url
    this.method = 'head'
    return this
  }

  options (url) {
    this._url = url
    this.method = 'options'
    return this
  }

  post (url) {
    this._url = url
    this.method = 'post'
    return this
  }

  put (url) {
    this._url = url
    this.method = 'put'
    return this
  }

  patch (url) {
    this._url = url
    this.method = 'patch'
    return this
  }

  format (type) {
    if (!contentType[type]) {
      vue.util.warn(`[services format: contentType]: ${type} is undefined`)
    }
    this.transformRequest = [contentType[type]]

    return this
  }

  setApiName (name) {
    apiName = name
    return this
  }

  setData (data) {
    let newData = data

    // handle RESTfull api
    if (isRESTfull) {
      const arr = checkRESTfullParams(RESTfullParams, data)
      if (arr.length > 0) {
        const toPath = pathToRegexp.compile(this.url)
        const RESTfulUrl = toPath(data)

        const newValue = handleRESTfullData(arr, data)

        this.url = RESTfulUrl
        newData = newValue
      }
    }

    if (this.method === 'get') {
      this.params = newData
    } else {
      this.data = newData
    }

    return this
  }
}

export default AjaxConfig
