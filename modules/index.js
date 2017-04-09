console.log('I am index')

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)
import { split }  from './split';

class S {
	constructor(){
		this.a = 'a '
	}
}

alert(new S())
console.log(split);
