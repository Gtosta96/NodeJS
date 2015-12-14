var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
fs.readFile(__dirname + '/site_pessoal.html', function(erro, html){
		response.writeHeader(200, {'Context-Type': 'text/html'});
		if (erro) throw erro;
		
		response.write(html);
		response.end();
	});	
});
server.listen(3000, function(){
	console.log('Servidor de aplicação em execução...');
})