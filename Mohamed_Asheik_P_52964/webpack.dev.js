const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devServer: {
        compress: true,
        port: 9000
    }
});
