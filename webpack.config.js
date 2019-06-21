const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/js/root.js",
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' },

      {
        test: /\.less/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  context: path.join(__dirname),
  devtool: process.env.NODE_ENV !== "production" ? "inline-sourcemap" : null,
  plugins: process.env.NODE_ENV !== "production" ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
