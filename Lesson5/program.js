var fs = require('fs');

fs.readdir(process.argv[2],function(err,data){
	data.forEach(function(entry){
		if(entry.split('.')[1] === process.argv[3])
			console.log(entry)
	})
})