// var webpack = require('webpack')


module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /styles/,
        loader: "style!css?minimize!autoprefixer?browsers=last 5 versions!sass"
      }
    ]
  },
  // sassLoader: {
  //   includePaths: "./"
  // }
}
