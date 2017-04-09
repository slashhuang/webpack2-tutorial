var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  // 在webpack的不同编译阶段，会去做不同的事情。 一般是在生产环境
  plugins: [
    
    new uglifyJsPlugin({ // 压缩和混淆代码 jquery.min.js ==> 压缩后的代码
      compress: {
        warnings: false
      },
      mangle:{} //混淆代码，heloworld ==> h代码量大大减少
    })
  ]
}
