const path =require('path');
module.exports = {
  entry:{
	  index:'./index.js',
   	index1:'./index1.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '_[name].js' 
  }
};
