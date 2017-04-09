
const path =require('path');
let base = {
	    index:'./index.js',
};

module.exports = {
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool:'source-map',
  // https://webpack.js.org/configuration/target/#target
  target:"web",
  entry:base,
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve:{
    alias:{
        test:path.resolve(__dirname,'test/test.js')
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
        }]
      },
    ]
  }
};
