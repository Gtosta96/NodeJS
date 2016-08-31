/**
 * Criado para deixar o código mockado mais limpo.
 * Mock será refatorado para MongoDB.
 */
module.exports = (function() {
    var contatos = [{
        id: 1,
        nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    }, {
        id: 2,
        nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    }, {
        id: 3,
        nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    }];

	return {
		contatos: contatos
	};
})();
