// var http = require('http');

// let server = http.createServer(function (req, res) {
//     // console.log(req);
//     // console.log(res);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<html><body><p>This is home Page.</p></body></html>');
//     res.end();
// })


// server.listen(5000, function () {
//     console.log("Server Started at localhost:5000");
// })


var http = require('http');

let server = http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    if (req.url == '/about') {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is about  Page.</p></body></html>');
        res.end();
    }
})


server.listen(5000, function () {
    console.log("Server Started at localhost:5000");
})