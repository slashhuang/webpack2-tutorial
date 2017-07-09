const consolePlugin = require('./write-plugins');
const customizeLoader = require('./write-loaders');
const path = require('path');

module.exports = {
  entry:{
      test: "./write-plugins/test.js"
  },
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    alias: {
      'c-loader': path.resolve(__dirname,'write-loaders/index.js'),
    }
  },
  resolve:{
    alias:{
        test:path.resolve(__dirname,'test/test.js'),
    }
  },
  module:{
    rules:[
        {
        test: /\.jsx?$/,
        exclude: [
          'node_modules'
        ],
        use:[{
            loader: "babel-loader",
        },{loader: "c-loader"}]
      },
    ]
  },
  plugins: [
    new consolePlugin(),
  ]
};