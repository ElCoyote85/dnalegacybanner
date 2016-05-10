var extractTextPlugin = require('extract-text-webpack-plugin');


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
        // loader: extractTextPlugin.extract("style!css?minimize!autoprefixer?browsers=last 5 versions!sass")
      }
    ]
  },
  plugins: [
    // new extractTextPlugin("[name].css")
  ]
  // sassLoader: {
  //   includePaths: "./"
  // }
}
