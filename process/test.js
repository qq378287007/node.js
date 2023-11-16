//JavaScript程序是由事件驱动执行的单线程模型，Node.js也不例外。
//Node.js不断执行响应事件的JavaScript函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了。

// process.nextTick()的函数不是立刻执行, 而是在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

//判断JavaScript执行环境
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}