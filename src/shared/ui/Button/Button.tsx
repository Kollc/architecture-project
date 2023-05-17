import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = ThemeButton.CLEAR,
  children,
  ...other
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  );
};
