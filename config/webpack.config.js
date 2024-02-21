// webpack.config.js
const path = require("path");
// 引入插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
const { merge } = require("webpack-merge");

module.exports = merge(
  {
    // 入口
    entry: path.resolve(__dirname, "../src/index.jsx"),
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"], // 自动拾取后缀
    },
    // 模块
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"] // 自动拾取后缀
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        {
          // 用正则去匹配要用该 loader 转换的 CSS 文件
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "dist"), // 设置Dev Server的静态文件根目录
      },
      historyApiFallback: true, 
    },
    // 插件
    plugins: [
      new HtmlWebpackPlugin({
        // 指定模版
        template: path.resolve(__dirname, "../public/index.html"),
      }),
    ],
  },
  process.env.NODE_ENV === "development" ? devConfig : prodConfig
);
