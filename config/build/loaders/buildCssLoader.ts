import { loader } from 'mini-css-extract-plugin';

export function buildCssLoaders(isDev: boolean) {
  return {
    test: /\.(css|scss)$/,
    use: [
      isDev ? 'style-loader' : loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}
