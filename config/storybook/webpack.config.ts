import { type BuildPaths } from './../build/types/config';
import type webpack from 'webpack';
import path from 'path';
import { type RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
