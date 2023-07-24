const path = require("path");
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/no-extraneous-dependencies
const PugPlugin = require("pug-plugin");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new PugPlugin({
            js: {
                filename: "scripts/[name].js",
            },
            css: {
                filename: "styles/[name].css",
            },
        }),
    ],
    devServer: {
        static: "./dist",
        watchFiles: ["src/**/*.pug", "src/**/*.scss"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
});
