const path = require('path');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

	entry: {
		main: [
			'./src/js/main.ts',
			'./src/css/main.scss'
		]
	},

	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, './src')
	},

	module: {
		rules: [

			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
           		options: {
					appendTsSuffixTo: [/\.vue$/],
            	}				
			},

			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},			

			{
				test: /\.s?css$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"vue-style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},

			{
				test: /\.(gif|png|jpe?g)$/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 20000,
						name: '[name].[ext]',
						outputPath: 'css/assets/',
						publicPath: '/css/assets',
						emitFile: false
					}
				}
			},

			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 20000,
						name: '[name].[ext]',
						outputPath: 'css/assets/',
						publicPath: '/css/assets',
						emitFile: false
					}
				}
			}
		]
	},

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		}),
		new VueLoaderPlugin()
	],

	resolve: {
		extensions: [".tsx", ".ts", ".js", ".vue", ".css", ".scss"],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, 'src')
		}
	}
}