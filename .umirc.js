
// ref: https://umijs.org/config/
export default {
  history: {
    type: 'hash'
  },
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
          path: '/view',
          component: '../pages/view',
        }
      ]
    },
  ],
}
