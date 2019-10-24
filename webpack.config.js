const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
		vendor: ['react'],
		app: ['./src/ui/components/index.js']
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					loader: [
						{
							loader: 'css-loader',
							query: {
								localIdentName: '[hash:8]',
								modules: true
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
	}
};

module.exports = config;
