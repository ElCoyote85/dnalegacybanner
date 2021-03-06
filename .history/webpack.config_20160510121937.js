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

  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /styles/,
        // loader: ExtractTextPlugin.extract("style!css?minimize!autoprefixer?browsers=last 5 versions!sass")
        loader: ExtractTextPlugin.extract( "autoprefixer?browsers=last 5 versions" ,"style", "css")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./styles/[name].css")
  ]
  // sassLoader: {
  //   includePaths: "./"
  // }
}
