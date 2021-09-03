/**
 * 注意：路由定义的顺序会影响路由的解析
 */
export default [
  // 预览
  {
    path: '/view/:id',
    component: '@/pages/view',
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
      // 模板预览
      {
        path: '/templates/:id/view',
        component: '@/pages/templates/view',
      },
      // 请柬列表
      {
        path: '/story',
        component: '@/pages/story',
      },
      // 请柬详情
      {
        path: '/story/:id',
        component: '@/pages/story/detail',
      },
      // 请柬预览
      {
        path: '/story/:id/view',
        component: '@/pages/story/view',
      },
      // 请柬编辑
      {
        path: '/story/:id/editor',
        component: '@/pages/story/editor',
      },
    ]
  },
]