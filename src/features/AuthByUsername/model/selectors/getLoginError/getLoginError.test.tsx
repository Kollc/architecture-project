import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = { login: { error: 'error' } };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = { login: { error: undefined } };
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
