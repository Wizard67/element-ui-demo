import request from './request'

export const initApp = request('/init', 'get')

export const userInfo = request('/user', 'get')

export const initAnalysisCard = request('/analysis/initCard', 'get')
export const initAnalysisMap = request('/analysis/initMap', 'get')
