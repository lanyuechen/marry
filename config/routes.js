/**
 * 注意：路由定义的顺序会影响路由的解析
 */
export default [
  {
    path: '/test',
    component: '@/pages/test',
  },
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
        path: '/template',
        component: '@/pages/template',
      },
      // 模板详情
      {
        path: '/template/:id',
        component: '@/pages/template/detail',
      },
      // 模板预览
      {
        path: '/template/:id/view',
        component: '@/pages/template/view',
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