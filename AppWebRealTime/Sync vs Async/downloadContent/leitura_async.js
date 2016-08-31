var fs = require('fs');

var leituraAsync = function(arquivo){
	console.log('Inicializando leitura assincrona...');
	
	var inicioLeitura = new Date().getTime();
	fs.readFile(arquivo);
	var fimLeitura = new Date().getTime();
	
	console.log('Bloqueio Async: ' + (fimLeitura - inicioLeitura) + 'ms');
};
module.exports = leituraAsync;