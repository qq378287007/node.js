const Koa = require('Koa');
const app = new Koa();

app.use(async ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = { data: 'Hello World' };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello World</p>';
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
});

app.listen(3000); 

/*
// With Content-Type: text/html; charset=utf-8
ctx.is('html'); // => 'html'
ctx.is('text/html'); // => 'text/html'
ctx.is('text/*', 'text/html'); // => 'text/html'

// When Content-Type is application/json
ctx.is('json', 'urlencoded'); // => 'json'
ctx.is('application/json'); // => 'application/json'
ctx.is('html', 'application/*'); // => 'application/json'

ctx.is('html'); // => false

if (ctx.is('image/*')) {
  // process
} else {
  ctx.throw(415, 'images only!');
}
 */

/*
switch (ctx.accepts('json', 'html', 'text')) {
  case 'json': break;
  case 'html': break;
  case 'text': break;
  default: ctx.throw(406, 'json, html, or text only');
}
*/

// Accept-Encoding: gzip
//ctx.acceptsEncodings('gzip', 'deflate', 'identity');
// => "gzip"



// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5
//ctx.acceptsCharsets('utf-8', 'utf-7');
// => "utf-8"











