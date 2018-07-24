export default [
  /*
   * Login
   */
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login')
  },

  /*
   * App
   */
  {
    name: 'app',
    path: '/',
    component: () => import('@/views/App'),
    children: [
      /*
      * Dashboard
      */
      {
        name: 'analysis',
        path: '/dashboard/analysis',
        alias: '/',
        component: () => import('@/views/Dashboard/Analysis/')
      },

      /*
      * Exception
      */
      {
        name: 'no-find',
        path: '*',
        alias: '/404',
        component: () => import('@/views/Exception/404/')
      }
    ]
  }
]
