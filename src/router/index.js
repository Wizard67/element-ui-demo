import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { beforeEach } from './hook'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach(beforeEach)

export default router
