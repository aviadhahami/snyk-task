const path = require('path');

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
						presets: ['@babel/preset-env']
					}
				},
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
	}
};

module.exports = config;
