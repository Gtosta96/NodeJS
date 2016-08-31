var fs = require('fs');

fs.readdir(__dirname, function(error, files) {
	if(error) throw error;

	files.forEach(function(file) {
		var path = './' + file;

		fs.stat(path, function(error, stat) {
			if(error) throw error;

			if(stat.isFile())
				console.log('file: %s - bytes: %d', file, stat.size);
		});
	});
});
