const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: path.join(__dirname, './src/main.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    devServer:{
        open: true, // 自动打开浏览器
        port: 8888, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true, // 启用热更新 的 第1步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.scss$/, use: ["style-loader", "css-loader", 'sass-loader']},
            {test: /\.less$/, use: ["style-loader", "css-loader", 'less-loader']},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[ext]')
                }
            },
            {test: /\.(ttf|svg|eot|woff|woff2)$/, use: "url-loader"},

            {test: /\.vue$/, use: "vue-loader"}
        ]
    }
};