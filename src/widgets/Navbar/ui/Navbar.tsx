import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useEffect, useState } from 'react';
import { LoginModal, loginActions } from 'features/AuthByUsername';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/types/store';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
    void dispatch(loginActions.clearAuthData());
  }, [dispatch]);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (authData) {
      setIsAuthModal(false);
    }
  }, [authData]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};
