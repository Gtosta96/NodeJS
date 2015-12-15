var http = require ('http');
var url = require ('url');
var fs = require ('fs');

//função auxiliar para concatenar.
var concatFilePath = function(page){
	return __dirname + '/' + page + '.html';
}
//variaveis das páginas (criadas apenas para facilitar o entendimento).
var errorPage = concatFilePath('erro');
var artigoPage = concatFilePath('artigo');

//validação das páginas.
var getFileByPathName = function (pathname) {
	if (pathname && pathname != '/') {

		var file = concatFilePath(pathname);				
		var fileExists = fs.existsSync(file); 
		if (fileExists){
			return file;
		}
		return errorPage;
	}
	return artigoPage;
}

//criação do server.
var server = http.createServer(function (request, response) {
	response.writeHeader(200, {'Context-Type': 'text/html'});
	
	var pathname = url.parse(request.url).pathname;
	var file = getFileByPathName(pathname);
	
	fs.readFile(file, function(erro, html) {
		if (erro) throw erro;
			
		response.end(html);
	});
});

//start do server.
server.listen(3000, function(){
	console.log("Server Started...");
});