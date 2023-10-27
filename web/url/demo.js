//完整的URL的各组成部分
/*
                         href
-----------------------------------------------------------------
                           host              path
                     --------------- ----------------------------
http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
-----    ---------   --------   ---- -------- ------------- -----
protocol     auth     hostname   port pathname     search     hash
                                               ------------
                                                  query
*/


//将一个URL字符串转换为URL对象
url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
/* =>
{ protocol: 'http:',
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/
//.parse方法
//第二个参数等于true时，该方法返回的URL对象中，query字段不再是一个字符串，而是一个经过querystring模块转换后的参数对象。
//第三个参数等于true时，该方法可以正确解析不带协议头的URL，例如//www.example.com/foo/bar。


//将一个URL对象转换为URL字符串
url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
/* =>
'http://www.example.com/p/a/t/h?query=string'
*/

//拼接URL
url.resolve('http://www.example.com/foo/bar', '../baz');
/* =>
http://www.example.com/baz
*/

http.createServer(function (request, response) {
    var tmp = request.url; // => "/foo/bar?a=b"

    //request.url不包含协议头和域名，但同样可以用.parse方法解析。
    url.parse(tmp);
    /* =>
    { protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?a=b',
      query: 'a=b',
      pathname: '/foo/bar',
      path: '/foo/bar?a=b',
      href: '/foo/bar?a=b' }
    */
}).listen(80);


//querystring模块用于实现URL参数字符串与参数对象的互相转换
querystring.parse('foo=bar&baz=qux&baz=quux&corge');
/* =>
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
*/

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
/* =>
'foo=bar&baz=qux&baz=quux&corge='
*/