const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base.config");

const PORT = 8080;

const webpackProdConfig = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
        protectWebpackAssets: true,
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React广告推广管理系统",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
};
module.exports = merge(webpackBaseConfig, webpackProdConfig);

