import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
{ rejectValue: string }
>('login/loginByUsername', async(authData, thunkAPI) => {
  try {
    const res = await axios.post<User>('http://localhost:8000/login', authData);

    if (!res.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
    thunkAPI.dispatch(userActions.setAuthData(res.data));

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('error');
  }
});
