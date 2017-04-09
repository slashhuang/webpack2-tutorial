
var webpack = require("webpack");
var DefinePlugin = require('webpack/lib/DefinePlugin');
module.exports =  { 
        context:process.cwd(), //确定了webpack的编译上下文
        watch: true, //文件在改变的时候，让webpack动态的更新
        // entry: './index.js', // ==> context ==> './index.js'
        entry:{
            'hello':'./hello.js'
        },

        devtool: 'source-map',//资源映射表 chrome debug==>

        output: {
            path: path.resolve(process.cwd(),'dist/'), //导出目录
            filename: '[name].js' //导出文件的文件名
        },
        // alias 别名 require('jquery')
        resolve: {
            alias:{ jquery: process.cwd()+'/src/lib/jquery.js', }
        },
        // 插件  稍后讲
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                _: 'underscore',
                React: 'react'
            }),
            new DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('development')
              }
            })
        ],
        // webpack的对module处理的核心
        module: {
            //加载方式
            loaders: [{
                test: /\.js[x]?$/, //==> 正则表达式 .js .jsx
                exclude: /node_modules/, // ==> 排除在loader的范围
                loader: 'babel-loader' //加载器，用来处理相关文件 .js index.jsx ==> string =loader=> 我要的另一种形式
                // ES6/7  ==>  ES5  [一种代码形式 ==>  另一种代码形式] less/sass ==> css
            },  {
                test: /\.less$/,
                loaders:['style-loader', 'css-loader','less-loader']
               // loaders数组 ==等价于== loader:"less!css!style" 
            //    typeof loader=='string' ==> loader.split('!');
            }, {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            }, {
                test: /\.html/,
                loader: "html-loader?" + JSON.stringify({minimize: false })
            } ]
        }
    };