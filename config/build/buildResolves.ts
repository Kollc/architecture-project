import { type BuildOptions } from './types/config';
import { type ResolveOptions } from 'webpack';

export const buildResolves = ({ paths }: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
  };
};
