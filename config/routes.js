export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      // hello world
      {
        path: '/',
        component: '@/pages/index',
      },
      // 模板列表
      {
        path: '/templates',
        component: '@/pages/templates',
      },
      // 模板预览页
      {
        path: '/templates/:id',
        component: '@/pages/templates/preview',
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