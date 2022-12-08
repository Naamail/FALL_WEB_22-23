var http = require('http');
var port = 3030;

http.createServer(function(req,res) {
    res.write("Hello node.js");
    res.end();
}).listen(port);