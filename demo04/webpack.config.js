module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { 
        test: /\.css$/,  // style-loader在js里面创建style标签，然后将结果输出到style标签里面
        // loader: 'style-loader!css-loader' // 
        loaders:['style','css'] 
      },
    ]
  }
};
