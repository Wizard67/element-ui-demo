export default [
  /*
   * Test
   */
  {
    name: 'test',
    path: '/test',
    component: () => import('@/layouts/Test')
  },

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
