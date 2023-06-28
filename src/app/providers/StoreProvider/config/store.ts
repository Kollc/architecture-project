import {
  configureStore,
  type ReducersMapObject,
  type DeepPartial,
} from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialStore?: DeepPartial<StateSchema>,
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
) {
  const rootReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(
    rootReducer as ReducersMapObject<StateSchema>
  );

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialStore as StateSchema,
    devTools: __IS_DEV__,
  });

  // @ts-expect-error Временно
  store.reducerManager = reducerManager;

  return store;
}
