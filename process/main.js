function main(argv) {
    // ...
}

main(process.argv.slice(2));


try {
    // ...
} catch (err) {
    // ...
    process.exit(1);
}


function log() {
    process.stdout.write(
        util.format.apply(util, arguments) + '\n');
}

//root权限下存在安全隐患，因此最好能把权限降下来
//如果是通过sudo获取root权限的，运行程序的用户的UID和GID保存在环境变量SUDO_UID和SUDO_GID里边。
//如果是通过chmod +s方式获取root权限的，运行程序的用户的UID和GID可直接通过process.getuid和process.getgid方法获取。
http.createServer(callback).listen(80, function () {
    var env = process.env,
        uid = parseInt(env['SUDO_UID'] || process.getuid(), 10),
        gid = parseInt(env['SUDO_GID'] || process.getgid(), 10);

    process.setgid(gid);
    process.setuid(uid);
});