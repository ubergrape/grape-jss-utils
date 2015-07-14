module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
