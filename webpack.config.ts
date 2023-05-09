import { buildWebackConfig } from "./config/build/buildWebpackConfig";
import webpack from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
