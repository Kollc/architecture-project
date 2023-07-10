import { type BuildPaths } from './../build/types/config';
import path from 'path';
import { type Configuration, DefinePlugin, type RuleSetRule } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (config.module) {
    const rules = config.module?.rules as RuleSetRule[];

    config.module.rules = rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  }

  if (config.resolve?.modules && config.resolve?.extensions) {
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
  }

  if (config.plugins) {
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
      })
    );
  }

  return config;
};
