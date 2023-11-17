const child_process = require("child_process");
const evalStr = "main.exe test";

child_process.exec(evalStr, (err, stdout, _stderr) => {
    if (err)
        console.log(err);
    else
        console.log(stdout);
});

