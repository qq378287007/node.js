const http = require('http');

http.get('http://www.baidu.com/', function (response) {
    console.log(response.statusCode);
    console.log(response.headers);

    const body = [];
    response.on('data', function (chunk) {
        body.push(chunk);
    });
    response.on('end', function () {
        let body2 = Buffer.concat(body);
        console.log(body2.toString());
    });
});
