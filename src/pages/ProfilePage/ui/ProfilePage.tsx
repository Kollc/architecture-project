import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import useAsyncReducer, {
  type ReducersList,
} from 'shared/lib/hooks/useAsyncReducer/useAsyncReducer';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useAsyncReducer({ reducers });
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <>
      <ProfileCard />
    </>
  );
};

export default ProfilePage;
