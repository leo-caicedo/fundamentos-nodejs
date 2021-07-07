const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Start Server');
    console.log(req.url);
    switch (req.url) {
        case '/hi':
            res.write('url is hi');
            res.end();
            break;
        default:
            res.write('url is not found');
            res.end();
    }
    //res.writeHead(201, { 'Content-Type': 'text/plain'});
    //res.write('Hello World!!!');
    //res.end();
}
console.log('Listening on port 3000');
