/*webpack-pro/webpack.config.js*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
          'pxtovw-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      minify: {
        html5: true,
        // minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true
      }
    })

  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 3001,
    open: true,
    compress: true,
  }
}