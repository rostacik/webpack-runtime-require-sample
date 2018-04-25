'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './ts/page.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  optimization: {
    namedModules: true,
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        jsmodules: {
          test: /[\\/]jsModules[\\/]/,
          name: "jsmodules",
          chunks: "all"
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};