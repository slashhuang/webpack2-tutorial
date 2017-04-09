

let base = {
	  index:'./index.js',
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
  entry:dynamic_entry_promise,
  output: {
    filename: '_[name].js'
  }
};
