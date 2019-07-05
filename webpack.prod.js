const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = WebpackMerge(CommonConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             warnings: false,
        //             drop_debugger: true,
        //             drop_console: true
        //         },
        //         output: {
        //             comments: false
        //         }
        //     }
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new BundleAnalyzerPlugin()
    ]
});
