var module = require('./module.js');

module(process.argv[2],process.argv[3],function(err,data){
	if(!err){
		data.forEach(function(entry){
			console.log(entry);
		})
	} else {
		console.log('Error occured ',err);
	}
})