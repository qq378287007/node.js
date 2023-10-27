var fs = require("fs");

//阻塞
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");

//非阻塞
fs.readFile('input0.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    //return console.error(err);

    console.log(data.toString());
});
console.log("程序执行结束!");
