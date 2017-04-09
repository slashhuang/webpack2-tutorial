
const path =require('path');
let base = {
	    index:'./index.js',
};

//webpack2 提供了多种配置方案

module.exports = {
  entry:base,
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve:{
    alias:{
        test:path.resolve(__dirname,'test/test/test.js')
    }
  },
  //entry ==> rules ===> webpack ==> output
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
