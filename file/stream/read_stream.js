const fs = require('fs');

var rs = fs.createReadStream('read_stream.js', 'utf-8');
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});
rs.on('end', function () {
    console.log('END');
});
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});