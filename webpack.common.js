const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcDir = path.join(__dirname, 'src');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, './dist'),
        // filename: '[name].[chunkhash].js',
        filename: 'bundle.js',
        // 如果预先定义过环境变量，就将其赋值给`ASSET_PATH`变量，否则赋值为根目录
        publicPath: process.env.ASSET_PATH || '/'
    },
    target: 'web',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [tsImportPluginFactory({ style: 'css' })]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'], // cacheDirectory是用来缓存编译结果，下次编译加速
                include: srcDir // 需要解析的目录
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // olimit 8192意思是，小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'public/index.html')
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendors'
                }
            }
        }
    }
};
