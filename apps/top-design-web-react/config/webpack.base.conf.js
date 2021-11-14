const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../site/index.tsx'),
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:9000/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        // https://webpack.docschina.org/guides/asset-modules/#resource-assets
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(less)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                math: 'always',
              },
          },}
        ],
      },
      {
        test: /\.md$/,
        use: [
          'babel-loader',
          '@top-design/markdown-loader'
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.SC_DISABLE_SPEEDY': true,
    }),
    new ForkTsCheckerWebpackPlugin({
        // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
        async: false
    }),
  ],
};
