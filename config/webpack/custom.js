const path = require('path')

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'app/views'),
		watchContentBase: true
  }
}
