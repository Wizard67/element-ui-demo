export default [
  /* 
   * Login
   */
  {
    name: 'login',
    path: '/login',
    component: () => import('@/Login')
  },

  /* 
   * Login
   */
  {
    name: 'app',
    path: '/',
    component: () => import('@/App'),
    children: [
      /* 
      * Dashboard
      */
      {
        name: 'analysis',
        path: '/dashboard/analysis',
        alias: '/',
        component: () => import('@/views/Dashboard/Analysis/')
      }
    ]
  }
];
