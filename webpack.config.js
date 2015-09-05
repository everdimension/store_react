var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var nodeModulesPath = path.join(__dirname, 'node_modules');
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
		filename: '[name].bundle.js',
		publicPath: '/build'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: nodeModulesPath, loader: 'babel' },
			{ test: /\.css$/, exclude: nodeModulesPath, loader: 'style!css' },
			{ test: /\.less$/, loader: 'style!css!less'}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(srcPath, 'index.html')
		})
	]

	// devServer: {
	// 	port: 3000
	// }
};

module.exports = config;
