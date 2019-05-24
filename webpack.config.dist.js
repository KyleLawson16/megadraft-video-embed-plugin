/*
 * Copyright (c) 2019, Kyle Lawson <kyle@kylelawson.io>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "."
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "megadraft-video-embed-plugin.js",
    library: "megadraft-video-embed-plugin",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
