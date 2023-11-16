var fs = require("fs");

// 异步读取
fs.readFile('input.txt', 'utf-8', function (err, data) {
    if (err) {
        //return console.error(err);
        //console.log(err.stack);
        //return;
        console.log(err);
    }
    else
        console.log("异步读取: " + data.toString());
});

// 同步读取
try {
    var data = fs.readFileSync('input.txt', 'utf-8');
    console.log(data);
    console.log("同步读取: " + data.toString());
} catch (err) {
    // 出错了
}