//字符编码
const buf0 = Buffer.from('runoob', 'ascii');
console.log(buf0.toString('hex'));
console.log(buf0.toString('base64'));

//创建
// 创建一个长度为 10、且用 0 填充的 Buffer。
buf1 = Buffer.alloc(10);
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
buf2 = Buffer.alloc(10, 1);
// 创建一个长度为 10、且未初始化的 Buffer。
const buf3 = Buffer.allocUnsafe(10);
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

//写入
buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");
console.log("写入字节数 : " + len);

//读取
buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++)
    buf[i] = i + 97;
console.log(buf.toString('ascii'));         // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));   // 使用 'ascii' 编码, 并输出: abcde
console.log(buf.toString('utf8', 0, 5));    // 使用 'utf8' 编码, 并输出: abcde
console.log(buf.toString(undefined, 0, 5)); // 使用默认的 'utf8' 编码, 并输出: abcde

//转换为 JSON 对象
buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);
console.log(json);// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
const copy = JSON.parse(json, (_key, value) => {
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);// 输出: <Buffer 01 02 03 04 05>

//合并
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

//比较
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

//拷贝
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');
//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);
console.log(buf1.toString());

//裁剪
var buffer1 = Buffer.from('runoob');
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 content: " + buffer2.toString());

// 裁剪返回原始buffer内存区域的部分
var buffer_origin = Buffer.from('runoob');
var buffer_slice = buffer_origin.slice(0, 2);
console.log("buffer slice content: " + buffer_slice.toString());
console.log("buffer origin content: " + buffer_origin.toString());
buffer_slice.write("wirte"); // Write buffer slice
console.log("buffer slice content: " + buffer_slice.toString());
console.log("buffer origin content: " + buffer_origin.toString());

//长度
var buffer = Buffer.from('www.runoob.com');
console.log("buffer length: " + buffer.length);
