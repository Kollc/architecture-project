import { type BuildOptions } from './types/config';
import { type RuleSetRule } from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.m?{js|jsx|tsx}$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        // plugins: [
        //   "i18next-extract",
        //   { locales: ["ru", "en"], keyAsDefaultValue: true },
        // ],
      },
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: 'file-loader',
  };

  const cssLoader = buildCssLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
