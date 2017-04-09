
const path =require('path');
let base = {
	  index:'./index.js?t=2',
   	  index1:'./index1.js'
};

//webpack2 提供了多种配置方案

module.exports = {
  entry:base,
  output: {
    //导出目录
  	path: path.resolve(__dirname, 'uuudist'),
    publicPath: "/output/uuudist/", // server-relative
  	//包规范格式
  	libraryTarget:'umd',
  	library: "MyLibrary", 
    //文件名
  	chunkFilename:'[chunkhash]_[name].js',
    //hash位数
  	hashDigestLength:3,
    //导出文件 
    //hash ==> webpack编译过程
    // chunkhash => webpack对每个文件的hash
    filename: '_[name].js'
  }
};
