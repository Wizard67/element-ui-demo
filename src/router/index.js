import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'

import protectLogin from './middleware/protectLogin'
import limitRouteFrom from './middleware/limitRouteFrom'
import checkRouteAuth from './middleware/checkRouteAuth'
import setWindowTitle from './middleware/setWindowTitle'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach(setWindowTitle)
router.beforeEach(protectLogin)
router.beforeEach(limitRouteFrom)
router.beforeEach(checkRouteAuth)

router.beforeResolve((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
