
const path =require('path');
let base = {
	  index:'./index.js?t=2',
   	  index1:'./index1.js'
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
  	path: path.resolve(__dirname, 'dist1'),
  	chunkFilename:'[id].js',
  	hashDigestLength:2,
    filename: '_[chunkhash]_[name]_[id].js'
  }
};
