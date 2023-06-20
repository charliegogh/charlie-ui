const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
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
  entry: path.resolve(process.cwd(), './packages/index.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(process.cwd(), './dist'),
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    // new WebpackManifestPlugin() // 生成manifest.json
    // new CompressionWebpackPlugin()
  ],
  optimization: {
    // minimize: true, // 默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    // js 压缩 webpack5自带
    // minimizer: [
    //   '...'
    // ]
    // runtimeChunk: { name: 'runtime' } // 运行时代码 ??? 开启是
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

module.exports = merge(baseConfig, prodConfig)
