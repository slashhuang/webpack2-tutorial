module.exports = {
  entry: { // 多个入口
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: { // [name]
    filename: '[name].js'
  }
};
