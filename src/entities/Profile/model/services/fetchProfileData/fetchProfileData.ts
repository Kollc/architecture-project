import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import type { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>
>('profile/fetchProfileData', async(_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const res = await extra.api.get<Profile>('/profile');
    return res.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
