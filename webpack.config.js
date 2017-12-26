const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
module.exports = {
  // context: 'index.html' ,
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name]-[chunkhash].js',
    // publicPath: 'http://cdn.com/'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a-[chunkhash].html',
      template: 'index.html',
      inject: 'body',
      title: 'this is a',
      date: new Date(),
      //chunks: ['main','a'],    //包含那个文件
      excludeChunks: ['b','c']   //去除那个文件
    }),
    new htmlWebpackPlugin({
      filename: 'b-[chunkhash].html',
      template: 'index.html',
      inject: 'body',
      title: 'this is b',
      date: new Date(),
      chunks: ['b']
    }),   
    new htmlWebpackPlugin({
      filename: 'c-[chunkhash].html',
      template: 'index.html',
      inject: 'body',
      title: 'this is c',
      date: new Date(),
      chunks: ['c']
    })
  ]
}








































