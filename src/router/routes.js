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
          auth: true,
          menu: '/dashboard/analysis'
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
          auth: true,
          menu: '/form/basic-form'
        },
        component: () => import('@/views/BasicForm')
      },
      {
        name: 'step-form',
        path: '/form/step-form',
        meta: {
          auth: true,
          menu: '/form/step-form'
        },
        redirect: { name: 'step-form-info' },
        component: () => import('@/views/StepForm'),
        children: [
          {
            name: 'step-form-info',
            path: 'info',
            meta: {
              menu: '/form/step-form'
            }
          },
          {
            name: 'step-form-confirm',
            path: 'confirm',
            meta: {
              menu: '/form/step-form',
              limit: {
                from: 'step-form-info',
                back: 'step-form-info'
              }
            }
          },
          {
            name: 'step-form-result',
            path: 'result',
            meta: {
              menu: '/form/step-form',
              limit: {
                from: 'step-form-confirm',
                back: 'step-form-info'
              }
            }
          }
        ]
      },
      /*
       * Exception
       */
      {
        name: 'exception-403',
        path: '/exception/403',
        meta: {
          auth: true,
          menu: '/exception/403'
        },
        component: () => import('@/views/403')
      },
      {
        name: 'exception-404',
        path: '/exception/404',
        meta: {
          auth: true,
          menu: '/exception/404'
        },
        component: () => import('@/views/404')
      },
      {
        name: 'exception-500',
        path: '/exception/500',
        meta: {
          auth: true,
          menu: '/exception/500'
        },
        component: () => import('@/views/500')
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
