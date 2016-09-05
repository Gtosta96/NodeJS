//var controller = require('../controllers/home')(); comentado devido ao express-load

module.exports = function(app) {
    var controller = app.controllers.contato; // atributo contato provém do nome do arquivo .js

    app.route('/contatos')
        .get(controller.listaContatos);

    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);
};
