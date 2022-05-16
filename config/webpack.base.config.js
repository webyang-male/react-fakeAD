const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const webpackBaseConfig = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[fullhash:4].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            common: path.join(__dirname, '../src/common'),
            '@utils': path.join(__dirname, '../src/utils/'),
            '@components': path.join(__dirname, '../src/components/'),
            context: path.join(__dirname, '../src/context'),
            api: path.join(__dirname, '../src/api'),
            store: path.join(__dirname, '../src/store'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.(sc|c)ss/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};

module.exports = webpackBaseConfig;
