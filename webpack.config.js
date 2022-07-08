const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	// path.join(__dirname, '/index.js')
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

			// {
			// 	test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].[ext]',
			// 				outputPath: 'fonts/'
			// 			}
			// 		}
			// 	]
			// }

		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css",
			linkType: "text/css",
		}),
	],
};