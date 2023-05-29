const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: '/index.js',
	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								includePaths: ["./assets/scss"],
							},
						},
					},
				],
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
			filename: "css/style.css",
			linkType: "text/css",
		}),
	],
};