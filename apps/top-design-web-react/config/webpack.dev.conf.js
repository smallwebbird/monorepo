const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const config = require('./webpack.base.conf');


module.exports = merge(config, {
  mode: 'development',
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    host: '127.0.0.1',
    // disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, '../../../libraries/top-design-markdown-loader/*')]
  },
  resolve: {
    alias: {
      '@top-design/web-react': path.resolve(__dirname, '../components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|ts?|jsx?|js?)$/,
        exclude: /(node_modules)/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                require.resolve('react-refresh/babel'),
              ]
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    // new ExtraWatchWebpackPlugin({
    //   dirs: path.join(__dirname, '../../../libraries/top-design-markdown-loader')
    // })
  ]
});
