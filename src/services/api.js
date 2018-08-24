import Ajax from './convertors/ajaxConfig'
const ajax = (config) => new Ajax(config)

const baseUrl = 'https://easy-mock.com/mock/5b212f773cfa8868e0eba929/element-ui-demo'

export const login = ajax().post(`${baseUrl}/login`)
export const message = ajax().get(`${baseUrl}/message`)

export const allChartsDate = ajax().get(`${baseUrl}/allChartsDate`)
export const mapDate = ajax().get(`${baseUrl}/mapDate`)

export const activity = ajax().post(`${baseUrl}/activity`).format('form')
export const assets = ajax().post(`${baseUrl}/assets`)
export const repository = ajax().post(`${baseUrl}/repository`)
