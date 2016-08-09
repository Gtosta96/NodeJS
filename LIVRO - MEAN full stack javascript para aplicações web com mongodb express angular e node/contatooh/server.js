var http = require('http');
var app = require('./config/express')();

var serverPort = app.get('port');
http.createServer(app).listen(serverPort, function() {
	console.log('Express Server escutando na porta: ' + serverPort);
});
