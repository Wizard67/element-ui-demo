export default [
  /*
   * Login
   */
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录页 - Element-ui-demo'
    },
    component: () => import(/* webpackChunkName: 'login' */ '@/layouts/Login')
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
          title: '分析页 - Element-ui-demo',
          auth: true,
          menu: '/dashboard/analysis'
        },
        alias: '/',
        component: () => import(/* webpackChunkName: 'analysis' */ '@/views/Analysis')
      },
      /*
       * Form
       */
      {
        name: 'basic-form',
        path: '/form/basic-form',
        meta: {
          title: '基础表单页 - Element-ui-demo',
          auth: true,
          menu: '/form/basic-form'
        },
        component: () => import(/* webpackChunkName: 'basic-form' */ '@/views/BasicForm')
      },
      {
        name: 'step-form',
        path: '/form/step-form',
        meta: {
          title: '分步表单页（填写信息） - Element-ui-demo',
          auth: true,
          menu: '/form/step-form'
        },
        redirect: { name: 'step-form-info' },
        component: () => import(/* webpackChunkName: 'step-form' */ '@/views/StepForm'),
        children: [
          {
            name: 'step-form-info',
            path: 'info',
            meta: {
              title: '分步表单页（填写信息） - Element-ui-demo',
              menu: '/form/step-form'
            }
          },
          {
            name: 'step-form-confirm',
            path: 'confirm',
            meta: {
              title: '分步表单页（确认信息） - Element-ui-demo',
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
              title: '分步表单页（完成） - Element-ui-demo',
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
          title: '403 - Element-ui-demo',
          auth: true,
          menu: '/exception/403'
        },
        component: () => import(/* webpackChunkName: '403' */ '@/views/403')
      },
      {
        name: 'exception-404',
        path: '/exception/404',
        meta: {
          title: '404 - Element-ui-demo',
          auth: true,
          menu: '/exception/404'
        },
        component: () => import(/* webpackChunkName: '404' */ '@/views/404')
      },
      {
        name: 'exception-500',
        path: '/exception/500',
        meta: {
          title: '500 - Element-ui-demo',
          auth: true,
          menu: '/exception/500'
        },
        component: () => import(/* webpackChunkName: '500' */ '@/views/500')
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
        title: '403 - Element-ui-demo'
      },
      component: () => import(/* webpackChunkName: '403' */ '@/views/403')
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
        title: '500 - Element-ui-demo'
      },
      component: () => import(/* webpackChunkName: '500' */ '@/views/500')
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
        title: '404 - Element-ui-demo'
      },
      component: () => import(/* webpackChunkName: '404' */ '@/views/404')
    }]
  },
  {
    path: '*',
    redirect: '404'
  }
]
