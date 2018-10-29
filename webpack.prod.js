const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');


/*
module.exports = [
    createModuleConfig('umd'),
    createModuleConfig('var'),
    createModuleConfig('window'),
    createModuleConfig('this'),
];
*/

module.exports = [
    createModuleConfig('umd'),
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
