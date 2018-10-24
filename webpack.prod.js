const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        //library: 'OneReactComponents',
	    library: {
		    //global: 'OneReactComponents',
		    root: 'OneReactComponents',
		    //this: 'OneReactComponents',
		    //window: 'OneReactComponents',
		    amd: 'one-react-components',
		    commonjs: 'one-react-components'
	    },
        libraryTarget: 'umd',
        filename: 'one-react-components.js'/*,
        umdNamedDefine: true*/
    },
    devtool: 'inline-source-map',
    mode: 'production'
});
