import Vue from 'vue'
import Router from 'vue-router'
import { importAll } from './utils'

const Dashboard = require('@/pages/dashboard/page').default

const Pages = require.context('@/pages', true, /page\.vue$/)
const routeList = importAll(Pages, 'router')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    ...routeList
  ]
})

