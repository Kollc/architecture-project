import { type LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice', () => {
  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('password'))
    ).toEqual({
      password: 'password',
    });
  });

  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('username'))
    ).toEqual({
      username: 'username',
    });
  });

  test('isLoading', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };
    expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual(
      {
        isLoading: true,
      }
    );
  });

  test('clearStore', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      isLoading: false,
      error: '',
    };

    expect(loginReducer(state, loginActions.clearAuthData())).toEqual({
      username: '',
      password: '',
      isLoading: false,
      error: undefined,
    });
  });

  test('should with underfined state', () => {
    expect(
      loginReducer(undefined, loginActions.setUsername('username'))
    ).toEqual({
      username: 'username',
      password: '',
      isLoading: false,
      error: undefined,
    });

    expect(
      loginReducer(undefined, loginActions.setPassword('password'))
    ).toEqual({
      username: '',
      password: 'password',
      isLoading: false,
      error: undefined,
    });
  });
});
