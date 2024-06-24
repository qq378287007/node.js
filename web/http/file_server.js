const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');

const root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

const server = http.createServer(function (request, response) {
    const pathname = url.parse(request.url).pathname; // '/static/bootstrap.css'
    const filepath = path.join(root, pathname); // '/srv/www/static/bootstrap.css'
    console.log('File path: ' + filepath);
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');

//http://localhost:8080/file_server.js
