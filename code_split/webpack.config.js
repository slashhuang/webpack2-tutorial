
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
    //导出目录
  	path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/", // server-relative
  	//包规范格式
  	libraryTarget:'umd',
  	library: "MyLibrary",
    //文件名
  	chunkFilename:'[chunkhash]_[id].js',
    //hash位数
  	hashDigestLength:2,
    //导出文件
    filename: '[name].js'
  }
};
