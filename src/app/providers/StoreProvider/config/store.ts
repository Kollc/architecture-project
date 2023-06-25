import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialStore?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialStore,
    devTools: __IS_DEV__,
  });
}

export default createReduxStore();
