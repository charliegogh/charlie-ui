const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@p': path.resolve(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false // 忽略空格
          }
        }
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.(less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 单独提取css文件
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css' // splitChunks提取公共css时的命名规则
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ProgressBarPlugin()
  ]
}
