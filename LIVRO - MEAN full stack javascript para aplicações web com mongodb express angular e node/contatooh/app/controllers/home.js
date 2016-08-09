module.exports = function() {
	var controller = {};

	controller.index = function(req, res) {
		var vm = {nome: 'Express'};
			res.render('index', vm);
	};

	return controller;
};
