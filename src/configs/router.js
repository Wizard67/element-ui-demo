import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/pages/dashboard/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})
