const merge = require('webpack-merge'),
    common = require('./webpack.base'),
    path = require('path'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[hash:5].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_module[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {

                    // loaders: {
                    //     scss: 'vue-style-loader!css-loader!sass-loader',
                    //     sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',

                    //     // transformToRequire: {
                    //     //     img: 'src'
                    //     // }
                    // }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: 'imgs/[name].[contenthash:5].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                              quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:5].css'
        }),
        new OptimizeCSSAssetsPlugin(),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_debugger: true,
                    drop_console: true
                }
            },
            cache: true,
            parallel: true,
            sourceMap: false
        })
    ]
});