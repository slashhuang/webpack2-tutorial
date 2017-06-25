var context = require.context('./src',false);
let a = context('./a').a;

// import { a } from './src/a';
import { b } from './src/b';

var id = require.resolve('./src/a');
if (id === 0) {
    console.log('1st')
} else {
    console.log('not 1st')
}
console.log(a + b);