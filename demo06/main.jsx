var React = require('react');
var ReactDOM = require('react-dom'); // 处理js文件
var style = require('./app.css'); // 处理css 文件

ReactDOM.render(
  <div>
    <h1 className={style.h1}>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.getElementById('example')
);
