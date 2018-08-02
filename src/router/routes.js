export default [
  /*
   * Login
   */
  {
    name: 'login',
    path: '/login',
    props: {
      name: 'attrs'
    },
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
        alias: '/',
        component: () => import('@/views/Analysis/')
      },

      /*
      * Exception
      */
      {
        name: 'no-find',
        path: '*',
        alias: '/404',
        component: () => import('@/views/404/')
      }
    ]
  }
]
