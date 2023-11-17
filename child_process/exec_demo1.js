const child_process = require("child_process");
const evalStr = "main.exe test";

const child = child_process.exec(evalStr); //execSync，同步

var result = '';
child.stdout.on('data', function (data) {
    result += data;
});
child.on('close', (code) => {//流退出
    console.log(`close中退出码：${code}`);
    console.log(result);
});

child.on("exit", code => {//进程退出
    console.log(`exit中退出码：${code}`);
});
