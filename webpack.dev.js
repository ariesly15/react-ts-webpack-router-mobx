const path = require('path');
const CommonConfig = require('./webpack.common');
const WebpackMerge = require('webpack-merge');

// 代理到本地的后端服务地址
const ProxyUrl = 'http://127.0.0.1:7001/';

module.exports = WebpackMerge(CommonConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        //  指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，写法如下
        host: '0.0.0.0',
        port: 9090,
        proxy: {
            '/api/*': {
                target: ProxyUrl,
                changeOrigin: true,
                secure: false
            }
        }
    }
});
