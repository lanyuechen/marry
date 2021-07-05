
// ref: https://umijs.org/config/
export default {
  history: {
    type: 'hash'
  },
  publicPath: '/marry/',
  base: '/marry/',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
        {
          path: '/view/:id',
          component: '../pages/view',
        },
        {
          path: '/editor/:id',
          component: '../pages/editor',
        },
        {
          path: 'admin/editor/:id',
          component: '../pages/admin/editor',
        }
      ]
    },
  ],
  antd: {}
}
