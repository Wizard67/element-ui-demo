import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { beforeEach, beforeResolve, afterEach } from './hook'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach(beforeEach)
router.beforeResolve(beforeResolve)
router.afterEach(afterEach)

export default router
