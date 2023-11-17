const child_process = require("child_process");

function spawn(mainModule) {
    const worker = child_process.spawn('node', [mainModule]);
    worker.on('exit', function (code) {
        if (code !== 0)
            spawn(mainModule);
    });
}

spawn('worker.js');
