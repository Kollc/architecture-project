import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialStore?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialStore,
    devTools: __IS_DEV__,
  });
}
