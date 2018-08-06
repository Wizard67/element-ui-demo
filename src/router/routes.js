export default [
  /*
   * Login
   */
  {
    name: 'login',
    path: '/login',
    meta: {
      auth: false
    },
    component: () => import('@/layouts/Login')
  },

  /*
   * App
   */
  {
    name: 'app',
    path: '/',
    meta: {
      auth: false
    },
    component: () => import('@/layouts/App'),
    children: [
      /*
      * Dashboard
      */
      {
        name: 'analysis',
        path: '/dashboard/analysis',
        alias: '/',
        component: () => import('@/views/Analysis')
      },
      /*
      * Exception
      */
      {
        path: '/exception/403',
        redirect: {
          name: '403'
        }
      },
      {
        path: '/exception/404',
        redirect: {
          name: '404'
        }
      },
      {
        path: '/exception/500',
        redirect: {
          name: '500'
        }
      }
    ]
  },

  /*
   * 403
   */
  {
    path: '/403',
    component: () => import('@/layouts/App'),
    children: [{
      name: '403',
      path: '',
      meta: {
        auth: false
      },
      component: () => import('@/views/403')
    }]
  },

  /*
   * 500
   */
  {
    path: '/500',
    component: () => import('@/layouts/App'),
    children: [{
      name: '500',
      path: '',
      meta: {
        auth: false
      },
      component: () => import('@/views/500')
    }]
  },

  /*
   * 404
   * https://github.com/vuejs/vue-router/issues/724
   */
  {
    path: '/404',
    component: () => import('@/layouts/App'),
    children: [{
      name: '404',
      path: '',
      meta: {
        auth: false
      },
      component: () => import('@/views/404')
    }]
  },
  {
    path: '*',
    redirect: '404'
  }
]
