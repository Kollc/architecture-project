import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profile = useAppSelector(getProfileData);
  // const error = useAppSelector(getProfileError);
  // const isLoading = useAppSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={cls.data}>
        <Input
          value={profile?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={profile?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
