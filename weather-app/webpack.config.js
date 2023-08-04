const path = require('path')

module.exports = {
  entry: './script/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '.')
  }
}
