const path =require('path');
module.exports = {
	entry: {
		example: './example',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
};
