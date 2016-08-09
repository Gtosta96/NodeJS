var load = require('express-load');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var home = require('../app/routes/home'); comentado devido ao express-load

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
		app.use(bodyParser.urlencoded({extended: true})); //extended true: biblioteca qs, extended false: biblioteca querystring
		app.use(bodyParser.json());
		app.use(methodOverride());

		//home(app); comentado devido ao express-load
		load('models', {cwd: 'app'}) //cwd: pasta default
			.then('controllers')
			.then('routes')
			.into(app);

		return app;
};
