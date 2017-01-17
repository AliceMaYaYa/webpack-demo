var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        about: './src/about/index.js', 
        protocol: './src/protocol/index.js', 
    },
    //入口文件输出配置
    output: {
        path : './build/',
        filename : '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/,  loader: 'style-loader!css-loader?modules' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {test: /\.scss$/i, loaders: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    },
    resolve: {
        extension: ['','.js','.css','.jsx']
    },
};