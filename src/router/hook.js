import NProgress from '@/libs/nprogress'
import { loginProtection, checkRouteAuth } from './utils'

export const beforeEach = (to, from, next) => {
  next(
    loginProtection(to, from) ||
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
