import Vue from 'vue'
import Router from 'vue-router'

import DataStatistics from '@/pages/data_statistics/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DataStatistics
    },
    {
      path: '/data_statistics',
      name: 'DataStatistics',
      component: DataStatistics
    },
  ]
})
