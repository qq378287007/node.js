var options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET',
    headers: {
        'Accept-Encoding': 'gzip, deflate'
    }
};

http.request(options, function (response) {
    var body = [];

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);

        //判断服务器端是否使用了gzip压缩
        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {//gzip解压
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });
}).end();