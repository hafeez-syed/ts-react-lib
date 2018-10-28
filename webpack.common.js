const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './components/index.js',
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
            { test: /\.(css|less)$/, loader: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/},
			{ test: /\.tsx?$/, loader: ['awesome-typescript-loader'], exclude: /node_modules/ },
            { test: /\.(js|jsx)$/, loader: ['babel-loader'], exclude: /node_modules/, enforce: 'pre' },
            { test: /\.html$/i, loader: 'html-loader', exclude: /node_modules/},
            { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader?name=[path][name].[ext]'},
            { test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader?name=[path][name].[ext]'},
		]
	},
	plugins: [
        new CleanWebpackPlugin(['dist']),
        new CheckerPlugin(),
		new webpack.ProvidePlugin({
			'React': 'react',
			'ReactDOM': 'react-dom',
		}),
        new CopyWebpackPlugin([
            {from: 'assets/img', to: 'images'}
        ])
	],
    externals: {
        'React': 'react',
        'ReactDOM': 'react-dom'
    }
};

