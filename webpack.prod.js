const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = [
    createModuleConfig('amd'),
    createModuleConfig('commonjs2'),
    createModuleConfig('umd'),
    createModuleConfig('var'),
    createModuleConfig('window'),
    createModuleConfig('this'),
];


function createModuleConfig(target) {
    return merge(common, {
	    optimization: {
		    minimize: true
	    },
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: 'react-component.' + target + '.js',
            library: 'reactComponents',
            libraryTarget: target
        },
        mode: 'production',
        name: target
    });
}
