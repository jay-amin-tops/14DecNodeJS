let http = require("http");



// http.createServer(callbkfun)
// function callbkfun(params) {

// }
http.createServer( (req, res)=> {
    res.end('This is the example of node.js web-based application \n');
}).listen(5000, () => console.log("server statred at localhost:5000"))
