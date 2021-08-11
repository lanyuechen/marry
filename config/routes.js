/**
 * 注意：路由定义的顺序会影响路由的解析
 */
export default [
  // 模板预览页
  {
    path: '/templates/:id/view',
    component: '@/pages/templates/preview',
  },
  // 预览
  {
    path: '/view/:id',
    component: '@/pages/view',
  },
  // 编辑
  {
    path: '/editor/:id',
    component: '@/pages/editor',
  },
  {
    path: '/',
    component: '@/layouts/basic-layout',
    routes: [
      // 首页
      {
        path: '/',
        component: '@/pages/index',
      },
      // 模板列表
      {
        path: '/templates',
        component: '@/pages/templates',
      },
      // 模板详情
      {
        path: '/templates/:id',
        component: '@/pages/templates/detail',
      },
      // 个人页
      {
        path: '/my',
        component: '@/pages/my',
      },
    ]
  },
]