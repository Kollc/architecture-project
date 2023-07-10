import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = { login: { username: 'username' } };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });

  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = { login: { username: undefined } };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
