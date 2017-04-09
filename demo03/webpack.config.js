module.exports = {
  entry: {
    hello:'./main.js', // jsx文件
    test1:'./test.js'
  },
  output: {
    filename: '[name].js' //bundle.js
  },
  // loader 概念来了
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        // 解释下loader是从哪里招来的
        // 1、webpack.config 文件的运行环境是nodejs
        // 2、 依赖包的寻址方式是 node_modules递归往上查找 【nodejs里面包的寻址方式】
        loader: 'babel-loader?presets[]=es2015&presets[]=react', // babel里面的preset ==> plugins集合而已
        // ()=>{} let [...other] = [1,2]  react ==> JSX语法处理plugin集合
      },
    ]
  }
};
