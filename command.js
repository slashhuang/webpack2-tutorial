/**
 * built by slashhuang
 * 17/4/9
 */
const path= require('path');
const webpack = require('webpack');
const yargs = require('yargs');
const exec = require('child_process').execSync;
let folder = yargs.argv['f'];

const configFile = require(`./${folder}/webpack.config.js`);
configFile.context = path.resolve(process.cwd(),`./${folder}/`);
configFile.output.path =configFile.output.path? configFile.output.path:path.resolve(configFile.context,'dist');
configFile.watch = true;

Promise.resolve({then:(resolve,reject)=>{
	resolve(exec(`rm -rf ${configFile.output.path}`))
}}).then(()=>{
	webpack(configFile,function(){
	    console.log(`run  compilation done ${Date.now()}\n`)
	});
}).catch(error=>{
	console.error(error);
	process.exit(1)
})