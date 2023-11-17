const child_process = require("child_process");

const child = child_process.spawn('node', ['xxx.js']);

child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

child.on('close', function (code) {
    console.log('child process closed with code ' + code);
});
child.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});
