let http = require('http'), url = require("url")


http.createServer(function (req, res) {
    console.log(req.url);
    let urlParts = url.parse(req.url)
    console.log("urlParts", urlParts);
    switch (urlParts.pathname) {
        case "/":
            // homepage(req, res)
            break;
        default:
            res.writeHead( 404 , {
                "Content-type": "text/hmtl",
                "my-own-header": "hello-jay"
            })
            res.end("Hello, this is the home page :)"); 
            // homepage(req, res);
            break;
    }
}).listen(5000)