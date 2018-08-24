const t = title => `${title} - Element-ui-demo`

export default [
  /*
   * Login
   */
  {
    name: 'login',
    path: '/login',
    meta: {
      title: t('登录页')
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
          title: t('分析页'),
          auth: true,
          menu: '/dashboard/analysis'
        },
        alias: '/',
        component: () => import(/* webpackChunkName: 'analysis' */ '@/views/dashboard/Analysis')
      },
      /*
       * Form
       */
      {
        name: 'basic-form',
        path: '/form/basic-form',
        meta: {
          title: t('基础表单页'),
          auth: true,
          menu: '/form/basic-form'
        },
        component: () => import(/* webpackChunkName: 'basic-form' */ '@/views/form/BasicForm')
      },
      {
        name: 'step-form',
        path: '/form/step-form',
        meta: {
          title: t('分步表单页（填写信息）'),
          auth: true,
          menu: '/form/step-form'
        },
        redirect: { name: 'step-form-info' },
        component: () => import(/* webpackChunkName: 'step-form' */ '@/views/form/StepForm'),
        children: [
          {
            name: 'step-form-info',
            path: 'info',
            meta: {
              title: t('分步表单页（填写信息）'),
              menu: '/form/step-form'
            }
          },
          {
            name: 'step-form-confirm',
            path: 'confirm',
            meta: {
              title: t('分步表单页（确认信息）'),
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
              title: t('分步表单页（完成）'),
              menu: '/form/step-form',
              limit: {
                from: 'step-form-confirm',
                back: 'step-form-info'
              }
            }
          }
        ]
      },
      {
        name: 'advanced-form',
        path: '/form/advanced-form',
        meta: {
          title: t('高级表单页'),
          auth: true,
          menu: '/form/advanced-form'
        },
        component: () => import(/* webpackChunkName: 'basic-form' */ '@/views/form/AdvancedForm')
      },
      /*
       * Exception
       */
      {
        name: 'exception-403',
        path: '/exception/403',
        meta: {
          title: t('403'),
          auth: true,
          menu: '/exception/403'
        },
        component: () => import(/* webpackChunkName: '403' */ '@/views/exception/403')
      },
      {
        name: 'exception-404',
        path: '/exception/404',
        meta: {
          title: t('404'),
          auth: true,
          menu: '/exception/404'
        },
        component: () => import(/* webpackChunkName: '404' */ '@/views/exception/404')
      },
      {
        name: 'exception-500',
        path: '/exception/500',
        meta: {
          title: t('500'),
          auth: true,
          menu: '/exception/500'
        },
        component: () => import(/* webpackChunkName: '500' */ '@/views/exception/500')
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
        title: t('403')
      },
      component: () => import(/* webpackChunkName: '403' */ '@/views/exception/403')
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
        title: t('500')
      },
      component: () => import(/* webpackChunkName: '500' */ '@/views/exception/500')
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
        title: t('404')
      },
      component: () => import(/* webpackChunkName: '404' */ '@/views/exception/404')
    }]
  },
  {
    path: '*',
    redirect: '404'
  }
]
