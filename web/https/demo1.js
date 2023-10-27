//在options里加入rejectUnauthorized: false字段可以禁用对证书有效性的检查，
//从而允许https模块请求开发环境下使用自制证书的HTTPS服务器。

//key和cert字段指定了HTTPS服务器使用的私钥和公钥。
var options = {
    key: fs.readFileSync('./ssl/default.key'),
    cert: fs.readFileSync('./ssl/default.cer')
};

var server = https.createServer(options, function (request, response) {
    // ...
});

//根据HTTPS客户端请求使用的域名动态使用不同的证书
server.addContext('foo.com', {
    key: fs.readFileSync('./ssl/foo.com.key'),
    cert: fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
    key: fs.readFileSync('./ssl/bar.com.key'),
    cert: fs.readFileSync('./ssl/bar.com.cer')
});