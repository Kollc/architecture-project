import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export const Text = memo(({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  const mods = {
    [cls[theme]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
