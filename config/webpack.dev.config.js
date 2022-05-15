const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack4-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base.config");

const PORT = 8080;

const webpackDevConfig = {
  mode: "development",
  plugins: [
    //热更新插件
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React广告推广管理系统",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`,
    }),
  ],
  devtool: "eval-source-map",
};
module.exports = merge(webpackBaseConfig, webpackDevConfig);
