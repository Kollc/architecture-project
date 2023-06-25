import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginModalProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginModalProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Введите username')}
        value={''}
        onChange={() => {}}
        type='text'
        className={cls.input}
        autofocus
      />
      <Input
        placeholder={t('Введите password')}
        value={''}
        onChange={() => {}}
        type='text'
        className={cls.input}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
