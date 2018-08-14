import NProgress from 'nprogress'
import { protectLogin, limitRouteForm, checkRouteAuth } from './utils'

export const beforeEach = (to, from, next) => {
  next(
    protectLogin(to, from) ||
    limitRouteForm(to, from) ||
    checkRouteAuth(to, from)
  )
}

export const beforeResolve = (to, from, next) => {
  NProgress.start()
  next()
}

export const afterEach = (to, from) => {
  NProgress.done()
}
