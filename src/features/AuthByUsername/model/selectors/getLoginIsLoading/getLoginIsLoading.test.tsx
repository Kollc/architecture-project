import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = { login: { isLoading: true } };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = { login: { isLoading: undefined } };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
