import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo(({
  className,
  theme = ThemeButton.OUTLINE,
  children,
  square,
  disabled,
  size = SizeButton.M,
  ...other
}: ButtonProps) => {
  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button className={classNames(cls.Button, mods, [className])} {...other} disabled={disabled}>
      {children}
    </button>
  );
});
