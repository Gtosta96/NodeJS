var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
		var app = express();


		/*
		* Configuração de variaveis de ambiente
		*/
		app.set('port', 3000);
		app.set('view engine', 'ejs');
		app.set('views', './app/views');

		/*
		* Configuração de middlewares
		*/
		app.use(express.static('./public'));
		home(app);


		return app;
};
