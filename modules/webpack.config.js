
const path =require('path');
let base = {
	    index:'./index.js',
};

//webpack2 提供了多种配置方案
const dynamic_entry = ()=>base;

const dynamic_entry_promise=()=>{
	return new Promise((resolve,reject)=>{
		resolve(base)
	})
}

module.exports = {
  entry:base,
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
    rules:[
    // Conditions, Results and nested Rules.
        {
        test: /\.jsx?$/,
        
        exclude: [
          'node_modules'
        ],
        // flags to apply these rules, even if they are overridden (advanced option)

        loader: "babel-loader"
      },

    ]
  }
};
