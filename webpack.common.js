const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    styles: "./src/site/css/styles.css",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "_site"),
  },
  plugins: [
    new ManifestPlugin({
      fileName: "../src/.webpack/manifest.json",
    }),
    new MiniCssExtractPlugin({
      filename: "/css/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
};
