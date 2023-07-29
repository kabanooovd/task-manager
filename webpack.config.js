const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const dotenv = require("dotenv");

module.exports = (_, props) => {
    console.log("mode:", props.mode);
    return {
        mode: props.mode,
        target: "web",
        entry: "./src/index.tsx",
        devtool: "inline-source-map",
        devServer: {
            static: {
                directory: path.join(__dirname, "dist"),
            },
            port: 3000,
            historyApiFallback: true,
            // proxy: {
            //   "": {
            //     target: "styand url...",
            //     changeOrigin: true,
            //   },
            // },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "resolve-url-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            fallback: {
                fs: false,
                path: false,
                crypto: false,
            },
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new MiniCssExtractPlugin({
                ignoreOrder: true,
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: "public",
                        globOptions: {
                            ignore: ["**/index.html"],
                        },
                    },
                ],
            }),
            new webpack.ProvidePlugin({
                React: "react",
            }),
            new ESLintPlugin(),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(dotenv.config().parsed),
            }),
        ],
    };
};
