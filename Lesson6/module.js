var fs = require('fs');
module.exports = function(directory,extension,callback){
	if(directory && extension){
		var result = [];
		fs.readdir(directory,function(err,data){
			if(!err){
				data.forEach(function(entry){
					if(entry.split('.')[1] === extension)
						result.push(entry);
				})
				callback(null,result);
			} else {
				callback(err,null);
			}
		})
	} else {
		callback('Missing arguments',null);
	}
}
