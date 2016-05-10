// var webpack = require('webpack')


module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loader: [
      {
        test: /\.scss$/,
        include: /styles/
        loaders: ["style", "css", "autoprefixer?browser=last 3 versions", "sass"]
      }
    ]
  },
  // sassLoader: {
  //   includePaths: "./"
  // }
}
