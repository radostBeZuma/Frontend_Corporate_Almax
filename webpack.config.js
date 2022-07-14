const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: '/index.js',
	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},


	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',

			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css",
			linkType: "text/css",
		}),
	],
};