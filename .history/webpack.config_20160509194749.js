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
        loaders ["style", "css", "autoprefixer?browsers=last 3 versions", "sass"]
      }
    ]
  },
  // sassLoader: {
  //   includePaths: "./"
  // }
}
