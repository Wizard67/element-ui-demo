import Ajax from './convertors/ajaxConfig'
const ajax = (config) => new Ajax(config)

export const login = ajax().post(process.env.VUE_APP_LOGIN)
export const message = ajax().get(process.env.VUE_APP_MESSAGE)

export const allChartsDate = ajax().get(process.env.VUE_APP_ALL_CHARTS_DATA)
export const mapDate = ajax().get(process.env.VUE_APP_MAP_DATA)

export const activity = ajax().post(process.env.VUE_APP_ACTIVITY).format('form')
export const assets = ajax().post(process.env.VUE_APP_ASSETS)
export const repository = ajax().post(process.env.VUE_APP_REPOSITORY)
