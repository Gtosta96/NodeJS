var mock = require('../mock/contato');
var contatos = mock.contatos;

module.exports = function() {
    var properties = {
        listaContatos: listaContatos,
        obtemContato: obtemContato,
        removeContato: removeContato
	};

    return properties;
};

function listaContatos(req, res) {
    res.json(contatos);
};

function obtemContato(req, res) {
	var contatoId = req.params.id;
	var contato = contatos.filter(function getElementById(contato) {
		return contato.id == contatoId;
	});

	contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
};

function removeContato(req, res) {
    var contatoId = req.params.id;
    contatos = contatos.filter(function(contato, idx) {
        return contato.id != contatoId;
    });
    res.status(204).end();
    console.log('API: removeContato: %s', contatoId);
}
