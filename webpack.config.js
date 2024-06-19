const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const base = {
        mode: env.development ? "development" : "production",
        devtool: env.development ? "inline-source-map" : false,
        output: {
            path: path.join(__dirname, "dist", "unpacked")
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx"],
        },
    }

    return [
        {
            ...base,
            entry: path.resolve(__dirname, "src", "contentScript", "contentScript.ts"),
            output: {
                filename: "contentScript.js"
            },
            plugins: [
                new CopyPlugin({
                    patterns: [
                        {from: "icon-192x192.png", to: "icon-192x192.png", context: "public"},
                        {
                            from: "manifest.json", to: "manifest.json", context: "public", transform: (content) =>
                                Buffer.from(JSON.stringify({
                                    ...JSON.parse(content.toString()),
                                    manifest_version: parseInt(env.manifest_version),
                                    // description: process.env.npm_package_description,
                                    version: process.env.npm_package_version
                                }))
                        },
                    ]
                }),
            ]
        },
        {
            ...base,
            entry: path.resolve(__dirname, "src", "settings", "index.tsx"),
            output: {
                filename: "settings.js"
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: "settings.html",
                    inject: true
                })
            ]
        }
    ]
};