function hello() {
    console.log('Hello world');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

exports.hello = hello;
exports.world = function() {
    console.log('Hello, world!');
};
exports.greet = greet;