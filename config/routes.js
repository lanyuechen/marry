export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
      },
      {
        path: '/templates',
        component: '@/pages/templates',
      },
      {
        path: '/view/:id',
        component: '@/pages/view',
      },
      {
        path: '/editor/:id',
        component: '@/pages/editor',
      },
    ]
  },
]