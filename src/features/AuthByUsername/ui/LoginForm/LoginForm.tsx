import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from './../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/types/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from './../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from './../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from './../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from './../../model/selectors/getLoginError/getLoginError';
import useAsyncReducer, {
  type ReducersList,
} from 'shared/lib/hooks/useAsyncReducer/useAsyncReducer';

interface LoginModalProps {
  className?: string;
}

const reducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className }: LoginModalProps) => {
  useAsyncReducer({ reducers });
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const username = useAppSelector(getLoginUsername);
  const password = useAppSelector(getLoginPassword);
  const isLoading = useAppSelector(getLoginIsLoading);
  const error = useAppSelector(getLoginError);

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    void dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Введите username')}
        value={username}
        onChange={onChangeUsername}
        type='text'
        className={cls.input}
        autofocus
      />
      <Input
        placeholder={t('Введите password')}
        value={password}
        onChange={onChangePassword}
        type='text'
        className={cls.input}
      />
      <Button
        onClick={onLoginClick}
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
