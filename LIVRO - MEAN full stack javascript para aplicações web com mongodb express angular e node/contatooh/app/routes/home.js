var controller = require('../controllers/home')();

module.exports = function(app) {
	debugger;
	app.get('/', controller.index);
	app.get('/index', controller.index);
};
