const React = require('react');  // node_modules/react/index.js  package.json main字段 或者index.node index.json
// 但是webpack里面有自己的一套require的逻辑 ==>是nodejs模块引入方式的superset 超集
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.querySelector('#wrapper')
);
