
import request from './request'

const baseUrl = 'https://easy-mock.com/mock/5b212f773cfa8868e0eba929/element-ui-demo'

export const login = request(baseUrl + '/login', 'post')
export const initApp = request(baseUrl + '/init', 'get')
export const userInfo = request(baseUrl + '/user', 'get')

export const initAnalysisCard = request(baseUrl + '/analysis/initCard', 'get')
export const initAnalysisMap = request(baseUrl + '/analysis/initMap', 'get')
