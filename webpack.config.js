const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[hash].js',
	},
	plugins: [new BundleAnalyzerPlugin(), new HtmlWebpackPlugin({ template: './public/index.html' })],
	mode: 'development',
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, './dist'),
		hot: true,
		stats: {
			colors: true,
			context: path.resolve(__dirname, './src/components/'),
			performance: true,
			providedExports: true,
			relatedAssets: true, // need to verify -Tells stats whether to add information about assets that are related to other assets (like SourceMaps for assets).
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	performance: {
		maxAssetSize: 4000000, // 1kb = 1000 bytes, 1mb = 10,00,000 bytes
		maxEntrypointSize: 4000000,
		hints: 'error',
	},
};

if (currentTask === 'build') {
	config.mode = 'production';
	config.devtool = 'inline-nosources-source-map';
	config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
	config.plugins.push(new MiniCssExtractPlugin({ filename: 'index.[hash].css' }), new CleanWebpackPlugin());
}
module.exports = config;
