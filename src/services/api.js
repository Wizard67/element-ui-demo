
import ajax from './ajax'

const baseUrl = 'https://easy-mock.com/mock/5b212f773cfa8868e0eba929/element-ui-demo'

export const login = ajax(`${baseUrl}/login`, 'post', 'url')
export const initApp = ajax(`${baseUrl}/init`, 'get')
export const userInfo = ajax(`${baseUrl}/user`, 'get')

export const initAnalysisCard = ajax(`${baseUrl}/analysis/initCard`, 'get')
export const initAnalysisMap = ajax(`${baseUrl}/analysis/initMap`, 'get')
