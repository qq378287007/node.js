const square = require("./square");
// 这里 require() 了文件名，省略了 .js 扩展名（可选）

console.log("边长为 4 的正方形面积为 " + square.area(4));


setTimeout(() => {
    console.log("第一");
}, 300);
console.log("第二");


