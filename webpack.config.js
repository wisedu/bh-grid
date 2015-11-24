var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: {
    'bh-grid': './index.js',
    'demo': './examples/scripts/main.js'
  },

  resolve: {
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          "compact": false,
          "presets" : ['es2015','react']
        }
      }, 
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, 
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',"css-loader!less-loader?sourceMap"
        )
      }, 
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',"css-loader!sass-loader?sourceMap"
        )
      }, 
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            'style-loader', 'css-loader'
        )
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('[name].css')
  ],

  devtool: 'source-map'
};
