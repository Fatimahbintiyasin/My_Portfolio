const hello = require('./hello');

hello.sayHello();

const lib = require('./lib');
console.log(lib.halfOf(10));
console.log(lib.multiply(10, 2));