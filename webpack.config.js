const path = require('path')

module.exports = {
  entry: './js/source/app.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'js/dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
  }
}
