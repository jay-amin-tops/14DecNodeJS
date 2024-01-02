var http = require('http');

var server = http.createServer(function (req, res) {

    console.log("inside create server");

});

// server.listen(5000);

const host = "localhost"
const port = 5000
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});