var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');
var arquivo = "./node-v4.2.3-x64.msi";
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/v4.2.3/node-v4.2.3-x64.msi";

http.get(download, function(res){
	console.log('Fazendo download do nodeJS');
	
	res.on('data', function(data){
		stream.write(data);
	});
	res.on('end', function(){
		stream.end();
		console.log("Download finalizado!");
		leituraAsync(arquivo);
		leituraSync(arquivo);
	});
});