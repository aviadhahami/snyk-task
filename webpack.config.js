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
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
	}
};

module.exports = config;
