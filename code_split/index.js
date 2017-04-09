console.log('I am index')

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)

require.ensure([],(require)=>{
	require('./split.js')
},'dynamic')