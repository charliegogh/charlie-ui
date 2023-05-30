/**
 * @author charlie
 * @Description:
 * webpack打包环境基础构建
 */
'use strict'
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config = require('./config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = merge(
  baseConfig,
  {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    stats: 'errors-only', // 不展示打包信息
    cache: {
      type: 'filesystem'
    },
    devServer: {
      hot: false,
      client: {
        logging: 'none',
        progress: true
      },
      liveReload: true, // 当监听到文件变化时 dev-server 将会重新加载或刷新页面  hot 必须配置为false
      open: false,
      compress: true, // gzip
      port: config.dev.port
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html', // 自动打包html并引入相关静态文件
        filename: 'index.html'
      })
    ]
  }
)
module.exports = devConfig
