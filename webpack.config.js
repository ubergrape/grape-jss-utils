module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: 'json-loader',
        test: /\.json$/
      }
    ]
  }
}
