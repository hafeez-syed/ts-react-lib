const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        library: 'oneReactComponents',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'inline-source-map',
    mode: 'production'
});
