const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant: TOP Project",
            filename: "index.html",
        }),
    ],
}