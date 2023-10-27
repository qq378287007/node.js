//BOM字符标记文件编码
/*
Bytes      Encoding
----------------------------
    FE FF       UTF16BE
    FF FE       UTF16LE
    EF BB BF    UTF8
*/

//去除UTF8 BOM
function readText(pathname) {
    var bin = fs.readFileSync(pathname);

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3);
    }

    return bin.toString('utf-8');
}

//GBK转UTF8
var iconv = require('iconv-lite');

function readGBKText(pathname) {
    var bin = fs.readFileSync(pathname);

    return iconv.decode(bin, 'gbk');
}



//字符串替换，无论文件什么编码
function replace(pathname) {
    var str = fs.readFileSync(pathname, 'binary');
    str = str.replace('foo', 'bar');
    fs.writeFileSync(pathname, str, 'binary');
}










