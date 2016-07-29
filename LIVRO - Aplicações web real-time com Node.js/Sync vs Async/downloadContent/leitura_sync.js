var fs = require('fs');

var leituraSync = function(arquivo){
	console.log('Inicializando leitura sincrona...');
	
	var inicioLeitura = new Date().getTime();
	fs.readFileSync(arquivo);
	var fimLeitura = new Date().getTime();
	
	console.log('Bloqueio Sync: ' + (fimLeitura - inicioLeitura) + 'ms');
};
module.exports = leituraSync;