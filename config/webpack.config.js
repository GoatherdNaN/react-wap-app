let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("./path");
module.exports = {
    //context:path.context,
    resolve:{
        modules: ['node_modules', path.node_modules],
        extensions: ['.web.js','.js','.less','.json'],
        alias:{
            'layouts':path.layouts,
            'utils':path.utils,
            'components':path.components,
        }
    },
    /*配置该项是为了把注册在window上的东西继续用var xxx=require('xxx')的形式引用，并不将其打包进来*/
    // externals:{
    //   'react': 'React',
    //   'react-dom': 'ReactDOM'
    // },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                include:[
                    path.app
                ],
                exclude:[
                    path.node_modules
                ],
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            ['es2015',{"modules":false}],
                            "stage-0",
                            'react'
                        ],
                        "plugins":[
                            "transform-decorators-legacy",
                            'transform-runtime',
                            ["import",[{"libraryName":"antd-mobile", style:true}]],
                            "react-hot-loader/babel"
                        ]
                    }
                }
            },
            {
              test:/\.(woff|woff2|ttf|eot)($|\?)/,
              include:[path.layouts],
              use: ['url-loader?limit=8192&name=fonts/[hash:8].[name].[ext]']
            },
            {
                test: /\.(png|svg|jpg)$/,
                include:[path.layouts],
                use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]']
            },
            // {
            //     test: /\.(png|svg|jpg)$/,
            //     include:[path.layouts],
            //     use: {
            //       loader: 'file-loader',
            //       options:{
            //         name: '[hash:8].[name].[ext]',
            //         outputPath:'images/'
            //       }
            //     }
            // },
            {　　　　
        　　　　test: /\.(svg)$/i,
        　　　　loader: 'svg-sprite-loader',
        　　　　include: [
        　　　　　　require.resolve('antd-mobile').replace(/warn\.js$/, ''),
        　　　　],
        　　}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"my app",
            inject:"body",
            filename:"index.html",
            template:path.template
        }),
        // new webpack.ProvidePlugin({
        //     $:"jquery"
        // }),
        new webpack.optimize.CommonsChunkPlugin({
  	      name: 'vendor',
  	      filename: 'script/[name].[hash:8].js'
  	    }),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:function () {
                    return [
                        require("autoprefixer")({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9'
                            ]
                        }),
                        require("postcss-pxtorem")({
                          rootValue: 100,
                          propWhiteList: []
                        })
                    ]
                }
            }
        })
    ]
};
