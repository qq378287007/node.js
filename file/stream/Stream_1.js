var fs = require('fs');

//不存在则创建，存在则追加
fs.appendFile('test.txt', 'data to append', function (err) {
    if (err)
        throw err;
    console.log('The "data to append" was appended to file!');
});

//不存在则创建，存在则追加
var read = fs.createReadStream('input.txt');
//设置第二个参数append
var write = fs.createWriteStream('out.txt', { 'flags': 'a' });
//管道流读写操作
read.pipe(write);
console.log('执行完毕');