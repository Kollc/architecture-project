import { lazy } from 'react';

export const LoginFormAsync = lazy(async() => await import('./LoginForm'));
