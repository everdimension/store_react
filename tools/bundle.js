var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');
console.log(webpackConfig);

var bundle = function() {
	var bundleStart = null;

	var compiler = webpack(webpackConfig);

	compiler.plugin('compile', function() {
		console.log('Bundling...');
		bundleStart = Date.now();
	});
	compiler.plugin('done', function() {
		console.log(['Bundled in ', (Date.now() - bundleStart), 'ms!'].join(''));
	});

	var webpackServer = new WebpackDevServer(compiler, {
		publicPath: '/build',
		inline: true,
		hot: true,
		quiet: false,
		noInfo: true,
		stats: {
			color: true
		}
	});

	webpackServer.listen(3001, 'localhost', function() {
		console.log('Bundling project, please wait...');
	});
};

module.exports = bundle;
