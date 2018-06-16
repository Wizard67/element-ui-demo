import request from './request'

export const initApp = request('/init', 'get')

export const userInfo = request('/user', 'get')
