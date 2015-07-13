var http = require('http');
var bl = require('bl');
var first = false;
var second = false;


http.get(process.argv[2],function(response){
	response.pipe(bl(function(err,data){
		if(!err){
			console.log(data.toString());
			http.get(process.argv[3],function(response){
				response.pipe(bl(function(err,data){
					if(!err){
						console.log(data.toString());
						http.get(process.argv[4],function(response){
							response.pipe(bl(function(err,data){
								if(!err){
									console.log(data.toString());
								} else {
									console.error(err);
								}
							}))	
						});
					} else {
						console.error(err);
					}
				}))	
			});
		} else {
			console.error(err);
		}
	}))	
});




