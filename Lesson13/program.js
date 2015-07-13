var http = require('http');

var url = require('url');

var server = http.createServer(function(req,res){
	var parsedUrl = url.parse(req.url,true);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(parsedUrl.pathname === '/api/parsetime'){
		var date = new Date(parsedUrl.query.iso);
		res.write(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
		res.end();
	} else if (parsedUrl.pathname === '/api/unixtime'){
		var date = new Date(parsedUrl.query.iso);
		res.write(JSON.stringify({ unixtime: date.getTime() }));
		res.end();
	}
});

server.listen(process.argv[2]);