/*
           +---------+   +-----------+   +----------+
request -->|  parse  |-->|  combine  |-->|  output  |--> response
           +---------+   +-----------+   +----------+
*/
const fs = require('fs');
const path = require('path');
const http = require('http');

const MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript'
};

//分析URL，得到请求的文件的路径和类型（MIME）
function parseURL(root, url) {
    if (url.indexOf('??') === -1) {
        url = url.replace('/', '/??');
    }

    var parts = url.split('??');
    var base = parts[0];
    var pathnames = parts[1].split(',').map(function (value) {
        return path.join(root, base, value);
    });

    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}

//读取请求的文件，并按顺序合并文件内容
function combineFiles(pathnames, callback) {
    var output = [];

    (function next(i, len) {
        if (i < len) {
            fs.readFile(pathnames[i], function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    output.push(data);
                    next(i + 1, len);
                }
            });
        } else {
            callback(null, Buffer.concat(output));
        }
    }(0, pathnames.length));
}

function main(argv) {
    var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
        root = config.root || '.',
        port = config.port || 80;

    http.createServer(function (request, response) {
        var urlInfo = parseURL(root, request.url);

        combineFiles(urlInfo.pathnames, function (err, data) {
            //服务器返回响应，完成对一次请求的处理
            if (err) {
                response.writeHead(404);
                response.end(err.message);
            } else {
                response.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                response.end(data);
            }
        });
    }).listen(port);
}

main(process.argv.slice(2));

//node server.js config.json
