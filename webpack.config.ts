import type webpack from 'webpack';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';
import path from 'path';
import { buildWebackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
