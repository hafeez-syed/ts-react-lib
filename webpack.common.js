const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './components/index.js',
	output: {
		filename: 'dev-react-component.js',
		path: path.resolve(__dirname, './dist/')
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
            { test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/},
			{ test: /\.tsx?$/, loader: ['awesome-typescript-loader'], exclude: /node_modules/ },
            { test: /\.(js|jsx)$/, loader: ['babel-loader'], exclude: /node_modules/, enforce: 'pre' },
            { test: /\.html$/i, loader: 'html-loader', exclude: /node_modules/}
		]
	},
	plugins: [
        new CleanWebpackPlugin(['dist']),
        new CheckerPlugin(),
		new webpack.ProvidePlugin({
			'React': 'react',
			'ReactDOM': 'react-dom',
		})
	],
    optimization: {
        minimize: false
    },
    externals: {
        'React': 'react',
        'ReactDOM': 'react-dom'
    }
};
