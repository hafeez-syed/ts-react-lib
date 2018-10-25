const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const webpack = require('webpack');

module.exports = [
    createModuleConfig('amd'),
    createModuleConfig('commonjs2'),
    createModuleConfig('umd'),
    createModuleConfig('var'),
    createModuleConfig('window'),
    createModuleConfig('this'),
];


function createModuleConfig(target) {
    return {
        entry: './components/index.js',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        },
        module: {
            rules: [
                { test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/},
                { test: /\.tsx?$/, loader: ['awesome-typescript-loader'], exclude: /node_modules/ },
                { test: /\.jsx?$/, loader: ['source-map-loader', 'babel-loader'], exclude: /node_modules/, enforce: 'pre' },
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
        },
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: 'react-component.' + target + '.js',
            library: 'reactComponents',
            libraryTarget: target
        },
        mode: 'production',
        name: target
    };
}
