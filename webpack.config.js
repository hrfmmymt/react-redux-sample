const path = require('path')

module.exports = {
  entry: {
    main: [
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist/',
    historyApiFallback: true,
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
}
