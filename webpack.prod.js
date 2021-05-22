const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
module.exports = {
	entry: "./src/index.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename:'bundle.js',
		publicPath: '/'
	},

	resolve: {
		extensions: ['.js','.jsx']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader:'html-loader'
				}]
			},
			{
		        test: /\.(s*)css$/,
		        use: [
		          {
		            loader: MiniCssExtractPlugin.loader,
		          },
		          'css-loader'
		        ]
 			},

		]
	},
	devServer: {
		historyApiFallback: true,
	},
	 performance: {
       	hints: false,
    	maxEntrypointSize: 512000,
    	maxAssetSize: 512000
  	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css'
		}),
		new webpack.DefinePlugin({
      		"process.env": {
      			'TOKEN': JSON.stringify(process.env.TOKEN)
      		},
    	}),
	]	
};