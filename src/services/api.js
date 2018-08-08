
import ajax from './ajax'

const baseUrl = 'https://easy-mock.com/mock/5b212f773cfa8868e0eba929/element-ui-demo'

export const login = ajax(`${baseUrl}/login`, 'post', 'json')
export const message = ajax(`${baseUrl}/message`, 'get')

export const allChartsDate = ajax(`${baseUrl}/allChartsDate`, 'get')
export const mapDate = ajax(`${baseUrl}/mapDate`, 'get')

export const activity = ajax(`${baseUrl}/activity`, 'post', 'form')
