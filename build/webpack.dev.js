const merge = require('webpack-merge'),
    common = require('./webpack.base'),
    path = require('path'),
    apiMocker = require('webpack-api-mocker');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../public',
        historyApiFallback: true,
        before: function(app) {
            apiMocker(app, path.resolve('public/mocker.js'));
        },
        port:8889,
        open: 'http://localhost:8889/',
        host:'0.0.0.0'
    },
    output: {
        filename: 'js/[name].[hash:5].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {}
});