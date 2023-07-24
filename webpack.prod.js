const path = require("path");
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/no-extraneous-dependencies
const PugPlugin = require("pug-plugin");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new PugPlugin({
            js: {
                filename: "scripts/[name].[contenthash].js",
            },
            css: {
                filename: "styles/[name].[contenthash].css",
            },
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
});
