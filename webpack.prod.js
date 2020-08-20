const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "/css/[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  ],
  optimization: {
    splitChunks: { chunks: "all" },
    minimize: true,
  },
});
