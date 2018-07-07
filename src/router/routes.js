export default [
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
