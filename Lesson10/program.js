var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
				var data = strftime('%F %R', new Date());
				socket.end(data);

			});

server.listen(process.argv[2]);