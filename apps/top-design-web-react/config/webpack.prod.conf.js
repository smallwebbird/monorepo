const { merge } = require('webpack-merge');
const config = require('./webpack.base.conf');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(config, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(tsx?|ts?|jsx?|js?)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    '@arco-design/web-react': '@arco-design/web-react',
    '@arco-design/web-react/icon': '@arco-design/web-react/icon',
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerPort: '8888'
    // })
  ]
})
