var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: "./entry.js",
  // entry: {
  //   styles: "./styles"
  // },
  output: {
    path: __dirname,
    filename: "bundle.js"
    // filename: "[name].js",
    // chunkFile: "[id].js"
  },
  resolve: {
    modulesDirectories: ["node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /styles/,
        // loader: ExtractTextPlugin.extract("style!css?minimize!autoprefixer?browsers=last 5 versions!sass")
        loader: ExtractTextPlugin.extract("style", "css?minimize", "autoprefixer?browsers=last 3 versions!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
  // sassLoader: {
  //   includePaths: "./"
  // }
}
