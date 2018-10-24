const HtmlWebPackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	mode: 'development',
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: './index.html',
        })
    ],
    devServer: {
	    contentBase: './dist'
    }
});
