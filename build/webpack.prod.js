const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const prodConfig = {
  mode: 'production',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  entry: {
    'star': './packages/star/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    // new MiniCssExtractPlugin({ // 单独提取css文件
    //   filename: 'css/[name].[hash].css',
    //   chunkFilename: 'css/[name].[hash].css' // splitChunks提取公共css时的命名规则
    // }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin() // 生成manifest.json
    // new CompressionWebpackPlugin(),
  ],
  optimization: {
    minimize: true, // 默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    // js 压缩 webpack5自带
    minimizer: [
      '...'
    ]
    // runtimeChunk: { name: 'runtime' } // 运行时代码 ??? 开启是
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

module.exports = merge(baseConfig, prodConfig)
