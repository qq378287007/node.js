const fs = require('fs');
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

//1
rs.on('data', function (chunk) {
    ws.write(chunk);
});
rs.on('end', function () {
    ws.end();
});

//2
rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
        rs.pause();
    }
});
rs.on('end', function () {
    ws.end();
});
ws.on('drain', function () {//缓冲区空
    rs.resume();
});

