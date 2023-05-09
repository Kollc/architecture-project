import { BuildOptions } from "./types/config";
import { RuleSetRule } from "webpack";
import { loader } from "mini-css-extract-plugin";

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const cssLoader = {
    test: /\.(css|scss)$/,
    use: [
      isDev ? "style-loader" : loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
};
