# 异步
+ exec(cmd, options, callback)
```javascript
const cp = require('child_process')
cp.exec('ls -al|grep node_modules', { 
    timeout: 0, // 超时时间
    cwd: process.cwd(), // 可以改变当前的执行路径
    }, 
    function (err, stdout, stderr) {// 执行结果
    
});
```
+ execFile(cmd, args, options, callback)
```javascript
// 执行文件,参数
cp.execFile('ls', ['-al'], 
    function (err, stdout, stderr) => {
});

// 让execFile执行ls -al|grep node_modules这种语句
test.shell:
  ls -al|grep node_modules
  echo $1 // 打印参数
  echo $2

cp.execFile(path.resolve(__dirname, 'test.shell'), ['-al', 'bl'], 
    function(err, stdout, stderr) {
});
```
+ fork (模块路径, args, options) // 不一样的地方在于可以通信
```javascript
// cp.fork(模块路径)
// 和require一样把文件执行起来
const child = cp.fork(path.resolve(__dirname, 'child_process'))
console.log(process.pid)

// 主进程向子进程通信
child.send('hello child_process', () => {
  // child.disconnent() // 如果不断开, 两边会出现等待的情况
})

// 子进程向主进程通信
child.on('message', msg => {
  
})

// child_process.js:
console.log('aaa', process.pid)

process.on('message', msg => {
    console.log(msg)
    // 很容易出现死循环
})

process.send('send msg to parent')
//进程不一样, 完全独立, 本质也是调用spawn
```
+ spawn(cmd, args, options)
```javascript
cp.spawn(file, args, options) // 不支持回调, exec, execFile底层都是spwan
const child = cp.spawn(path.resolve(__dirname, 'test.shell'), ['-al', '-bl'], {
  cwd: path.resolve('..'),
}) 

// 返回的是子进程
console.log(child.pid, process.pid)

// 监听成功
child.stdout.on('data', function(chunk) {
  console.log(chunk.toString())
})

// 监听失败
child.stderr.on('data', function(chunk) {
  console.log(chunk.toString())
})

const code = `require('${rootFile}').call(null, ${JSON.stringify(args)})`
 // cp.spawn('cmd', ['/c', 'node', '-e', code]) // win下是这种结构
 const child = spawn('node', ['-e', code], {
   cwd: process.cwd(), // 当前执行未知的cwd
   stdio: 'inherit', // 默认是pipe, pipe必须通过on来接收信息, inherit不需要, 实时反馈
 })

child.on('error', e => {
    log.error(e.message)
    process.exit(1)
})

child.on('exit', e => {
    log.verbose('命令执行成功', e)
    process.exit(e)
})
```

```javascript
const {spawn} = require('child_process');
const child = spawn('wc');

child.on('exit', function(code, signal){
    console.log(`子进程以code ${code}和signal ${signal}退出`);
});

child.on('close', function(code, signal){
    console.log(`子进程以code ${code}和signal ${signal}关闭`);
});

child.stdout.on('data', (data)=> {
    console.log(`child stdout：${data}`);
});

child.stderr.on('data', (data)=> {
    console.error(`child stderr：${data}`);
});

process.stdin.pipe(child.stdin);

const find = spawn('find', ['。', '-type', 'f']);
find.stdout.pipe(child.stdin);

child.kill('SIGHUP');//linux
exec(`taskkill /PID ${child.pid} /T /F`, (error, stdout, stderr)=>{//windows
	console.log("taskkill stdout: " + stdout)
    console.log("taskkill stderr: " + stderr)
    if(error)
        console.log("error: " + error.message)
});
```

# 同步
+ execSync
+ execFileSync
+ spawnSync
```javascript
const ret = cp.execSync('ls -al|grep node_modules') // 用的比较多, 对脚本安全性没有校验
// 可以直接拿到结果
console.log(ret.toString())

const ret2 = cp.execFileSync('ls', ['-al'])
console.log(ret2.toString)

const ret3 = cp.spawnSync('ls', ['-al'])
console.log(ret3.stdout.toString()) // 返回的是一个对象
```
