const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
require('es6-promise').polyfill();
module.exports={
    entry:['./client/index.jsx'],
    output:{
        path:'./',
        filename:'bundle.js'
    },
    devServer:{
        inline:true,
        host:"0.0.0.0",
        port:3000
    },
    module:{
        loaders:[{
            test:/(\.jsx|\.js)$/,
            exclude:/node_modules/,
            loader:'babel',
            query:{
                presets:['es2015','react']
            }

        },
            {
                test: /\.(less|css)$/,
                loader:  'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|cur)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'index.html',
            title: 'carousel',
            appMountId: 'myCarousel'
        }),
        new webpack.HotModuleReplacementPlugin()

    ]

};
