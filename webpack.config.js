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
				use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", 'sass-loader'],
			},

			{
				test: /\.(ttf|eot|woff|woff2|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: './fonts/[name][ext]',
				},
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