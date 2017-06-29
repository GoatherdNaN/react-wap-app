const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require("./webpack.config");
const path = require("./path");
module.exports  = merge(config,{
    entry:{
        index:[path.index],
        vendor: [
            'react', 'react-redux', 'react-router-dom', 'react-router-redux', 'react-dom',
            'redux', 'querystring','n-zepto'
        ]
    },
    output:{
        path:path.dist,
        filename:"js/[name]_[hash:5].js",
        crossOriginLoading:"anonymous",
    },
    devtool:"cheap-module-source-map",
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
            }
        }),
        new optimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
        new webpack.optimize.UglifyJsPlugin({//压缩 必须是production环境
            compress:{
                warnings:false,
                drop_console:false
            }
        }),
        new cleanWebpackPlugin(['dist'],{
            root:path.root,
            "verbose": true,
        }),
        new ExtractTextPlugin({
            filename:"css/[name].[contenthash:5].css",
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                include:[
                    path.app
                ],
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                modules:true,
                                importLoaders:1,
                                sourceMap: true,
                                minimize:true,
                                localIdentName:"[name]_[local]_[hash:base64:5]"
                            }
                        },
                        {
                            loader:"postcss-loader"
                        }
                    ]
                }),
            },
            {
                test:/\.less$/,
                include:[
                    path.app
                ],
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                importLoaders:1,
                                module:true,
                                sourceMap: true,
                                localIdentName:"[name]_[local]_[hash:base64:5]"
                            }
                        },
                        {
                            loader:"postcss-loader"
                        },
                        {
                            loader:"less-loader"
                        }
                    ]
                }),
            },
            {
                test:/\.less$/,
                include:[
                    path.antd_mobile
                ],
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:"postcss-loader"
                        },
                        {
                            loader:"less-loader"
                        }
                    ]
                }),
            }
        ]
    }
});
