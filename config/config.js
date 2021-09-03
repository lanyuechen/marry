import routes from './routes';

export default {
  title: '花青素',
  history: {
    type: 'hash'
  },
  publicPath: '/marry/',
  routes,
  antd: {},
  dynamicImport: {
    loading: '@/components/loading',
  },
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
