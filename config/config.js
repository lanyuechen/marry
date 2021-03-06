import routes from './routes';

let publicPath = '/marry/';
if (process.env.NODE_ENV === 'production') {
  publicPath = 'https://cdn.jsdelivr.net/gh/lanyuechen/marry@gh-pages/';
}

export default {
  title: '花青素',
  history: {
    type: 'hash'
  },
  hash: true,
  publicPath,  // jsdelivr cdn 加速
  routes,
  antd: {},
  define: {
    PUBLIC_PATH: publicPath,
  },
  // dynamicImport: {
  //   loading: '@/components/loading',
  // },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
}
