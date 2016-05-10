var extraxtText = require('extraxt-text-webpack-plugin');


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
        loader: extraxtText.extraxt("style!css?minimize!autoprefixer?browsers=last 5 versions!sass")
      }
    ]
  },
  plugins: [
    new extraxtText("[name].css")
  ]
  // sassLoader: {
  //   includePaths: "./"
  // }
}
