const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        library: 'OneReactComponents',
        libraryTarget: 'umd',
        filename: 'one-react-components.js',
        umdNamedDefine: true
    },
    devtool: 'inline-source-map',
    mode: 'production'
});
