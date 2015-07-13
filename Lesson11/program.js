var http = require('http');
var fs = require('fs');

var fileStream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function(req,res){
		fileStream.pipe(res);
});

server.listen(process.argv[2]);

