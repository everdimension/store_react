var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'build');


var config = {
	entry: {
		app: path.join(srcPath, 'app.js'),
		vendor: ['react', 'flux']
	},
	resolve: {
		root: srcPath
	},
	output: {
		path: buildPath,
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, exclude: /node_modules/, loader: 'style!css' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(srcPath, 'index.html')
		})
	],

	devServer: {
		port: 3000
	}
};

module.exports = config;
