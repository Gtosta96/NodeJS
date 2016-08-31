var mock = require('../mock/contato');
var contatos = mock.contatos;

module.exports = function() {
    var controller = {
		listaContatos: listaContatos,
		obtemContato: obtemContato
	};

    return controller;
};

function listaContatos(req, res) {
	var vm = {contatos: contatos};
	res.json(vm);
};

function obtemContato(req, res) {
	var contatoId = req.params.id;
	var contato = contatos.filter(function getElementById(contato) {
		return contato.id == contatoId;
	});

	contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
};
