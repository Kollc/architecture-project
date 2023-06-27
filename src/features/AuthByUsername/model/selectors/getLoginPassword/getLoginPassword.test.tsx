import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = { login: { password: 'password' } };
    expect(getLoginPassword(state as StateSchema)).toEqual('password');
  });

  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = { login: { password: undefined } };
    expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
  });
});
