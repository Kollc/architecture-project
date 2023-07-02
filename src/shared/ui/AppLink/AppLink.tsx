import { type ReactNode, memo } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo(
  ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  }: AppLinkProps) => {
    return (
      <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
);
