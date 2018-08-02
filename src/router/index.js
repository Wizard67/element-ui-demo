import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { beforeEach, afterEach } from './hook'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
