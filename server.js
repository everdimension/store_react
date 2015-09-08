var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var setRoutes = require('./app/routes');
var isProduction = process.env.NODE_ENV === 'production';
console.log('isProduction', isProduction);

var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
	changeOrigin: true,
	ws: true
});

// require userSchema, itemSchema
// ------------------------------

var db_username = process.env.NODE_STORE_REACT_USER || 'username';
var db_password = process.env.NODE_STORE_REACT_PASS || 'password';

var db_address = 'mongodb://' + db_username + ':' + db_password + '@apollo.modulusmongo.net:27017/waG9ybam';

mongoose.connect(db_address);

var app = express();

app.set('port', process.env.PORT || 3100);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

setRoutes(app);


if (!isProduction) {
	var bundle = require('./tools/bundle.js');
	bundle();

	app.all('/build/*', function(req, res) {
		console.log('proxying /build ...');
		proxy.web(req, res, {
			target: 'http://localhost:3001'
		});
	});

	proxy.on('error', function(err) {
		console.log('caught proxy err');
	});

}

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.send(500, { message: err.message });
});

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
