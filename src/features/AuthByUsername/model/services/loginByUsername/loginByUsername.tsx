import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import type { User } from 'entities/User/models/types/userSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { dispatch, extra, rejectWithValue } = thunkApi;

  try {
    const res = await extra.api.post<User>('/login', authData);

    if (!res.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
    dispatch(userActions.setAuthData(res.data));

    if (extra.navigate) {
      extra.navigate('/profile');
    }
    return res.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
