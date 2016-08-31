//var controller = require('../controllers/home')(); comentado devido ao express-load

module.exports = function(app) {
	var controller = app.controllers.contato;

	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obtemContato);
};
