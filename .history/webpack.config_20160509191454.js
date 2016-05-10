// var webpack = require('webpack')


var config = {
  entry: "entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loader: [
      {
        test: /\.scss/,
        loader: "style|css|scss"
      }
    ]
  }
}

module.exports = config;