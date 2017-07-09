## webpack
1. overview
- modules 输入
在webpack看来
png jpg
scss less 【css预处理语句】
js
jsx
ts
coffee都是资源


=====  webpack来转换这个过程 ====
scss ==> css ?
拿到scss的字符串
loader 处理成scss文件
导出css

loader : function(content) { return newContent}
plugin : 在是贯穿webppack所有的编译体系里面，异步处理。

webpack是一个Node.js的运行时(runtime),大量异步过程。
pub/sub, callback

配置文件
webpack.config.js
{
    entry: {}, // 输入
    output: { //输出
        path: string, //输出目录
        filename: string //文件名
    },
    module: {
        rules: {
            test: /.jsx?$/,
            loader: 'babel-loader',
        }
    },
    plugins: [
        new uglifyJsPlugin()
        ==> mangle skrew
        在webpack编译完所有的代码后再压缩和混淆呗？
        lifecycle
        on('done?',() => {
            uglifyJsPlugin
        })
    ]
}
核心: core ===
输入、输入: entry + output
预处理文件: loader
编译生命周期: plugins


pub/sub: 设计模式 订阅发布
例子:
$('.a').on('click', callback);
$('.a').trigger('click') ==> callback会触发执行





- assets  输出
css 
js
html
png
jpg
font等等
