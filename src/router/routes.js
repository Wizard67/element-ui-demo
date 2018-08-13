export default [
  /*
   * Login
   */
  {
    name: 'login',
    path: '/login',
    component: () => import('@/layouts/Login')
  },

  /*
   * App
   */
  {
    name: 'app',
    path: '/',
    component: () => import('@/layouts/App'),
    children: [
      /*
      * Dashboard
      */
      {
        name: 'analysis',
        path: '/dashboard/analysis',
        meta: {
          auth: true
        },
        alias: '/',
        component: () => import('@/views/Analysis')
      },
      /*
       * Form
       */
      {
        name: 'basic-form',
        path: '/form/basic-form',
        meta: {
          auth: true
        },
        component: () => import('@/views/BasicForm')
      },
      /*
       * Exception
       */
      {
        path: '/exception/403',
        meta: {
          auth: true
        },
        redirect: {
          name: '403'
        }
      },
      {
        path: '/exception/404',
        meta: {
          auth: true
        },
        redirect: {
          name: '404'
        }
      },
      {
        path: '/exception/500',
        meta: {
          auth: true
        },
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
      component: () => import('@/views/404')
    }]
  },
  {
    path: '*',
    redirect: '404'
  }
]
