const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(`${__dirname}/input.txt`)
readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    data = chunk;
});

readableStream.on('end', function() {
    console.log(data);
});

const transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);
