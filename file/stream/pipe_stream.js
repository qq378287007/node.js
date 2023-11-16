const fs = require('fs');

var rs = fs.createReadStream('pipe_stream.js');
var ws = fs.createWriteStream('pipe_stream_copied.txt');

rs.pipe(ws);

//不希望自动关闭Writable流
//readable.pipe(writable, { end: false });

