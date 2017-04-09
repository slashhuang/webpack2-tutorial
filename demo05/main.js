var img1 = document.createElement("img");
img1.src = require("./small.png");// 调用url-loder处理 ==》 base 64
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");// 调用url-loder处理 ==》 hash算法修改名字完事
document.body.appendChild(img2);
