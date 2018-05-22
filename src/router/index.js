import Vue from 'vue'
import Router from 'vue-router'
import { importAll } from '@/utils'

const routers = require.context('@/views', true, /index\.vue$/)
const moduleRouters = importAll(routers, 'router')

Vue.use(Router)

export default new Router({
  routes: [
    ...moduleRouters
  ]
})
