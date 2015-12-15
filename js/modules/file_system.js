var fs = require('fs');

/*__dirname retorna o diretório atual do arquivo em questão
Assincrono*/
fs.readFile(__dirname + '/file_system.html', function(erro, arquivo){
	if (erro) throw erro;
	
	console.log(arquivo);
});
//Sincrono
var arquivo = fs.readFileSync(__dirname + '/file_system.html');
console.log(arquivo);