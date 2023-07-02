import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import useAsyncReducer, { type ReducersList } from 'shared/lib/hooks/useAsyncReducer/useAsyncReducer';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useAsyncReducer({ reducers });
  const { t } = useTranslation('profile');

  return (
    <>
      <div>{t('Страницы профиля')}</div>
    </>
  );
};

export default ProfilePage;
