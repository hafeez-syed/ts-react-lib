const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	optimization: {
		minimize: false
	},
	devtool: 'inline-source-map',
	mode: 'development',
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: './index.html',
        })
    ],
    output: {
        filename: 'react-component.umd.js',
        path: path.resolve(__dirname, './dist/')
    },
    devServer: {
	    contentBase: './dist'
    }
});
