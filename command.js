/**
 * built by slashhuang
 */
const path= require('path');
const webpack = require('webpack');
//命令
const command = JSON.parse(process.env.npm_config_argv)['remain'].pop();
if(command.toString().length==1){
    command ='0'+command; 
};
if(command>16 || command<1){
    console.log('最后一个参数请指定在1-16之间');
    process.exit(0);
}
const configFile = require(`./demo${command}/webpack.config.js`);
configFile.context = path.resolve(process.cwd(),`./demo${command}/`);
configFile.output.path = configFile.context;
configFile.watch = true;
const compiler = webpack(configFile,function(){
    console.log(`run  compilation done ${Date.now()}\n`)
});