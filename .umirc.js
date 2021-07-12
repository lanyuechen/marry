
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
          path: '/templates',
          component: '../pages/templates',
        },
        {
          path: '/view/:id',
          component: '../pages/view',
        },
        {
          path: '/editor/:id',
          component: '../pages/editor',
        },
      ]
    },
  ],
  antd: {}
}
