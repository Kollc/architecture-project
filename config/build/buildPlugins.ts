import { BuildOptions } from "./types/config";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

    new HotModuleReplacementPlugin(),
  ];
};
