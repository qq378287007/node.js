function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello: hello,
    greet: greet,
    world: function () {
        console.log('Hello World');
    }
};

/*
module.exports = {
    hello: hello,
    greet: greet
};
module.exports.world = function () {
    console.log('Hello World');
}
*/