import {
  type CombinedState,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import type { NavigateOptions, To } from 'react-router-dom';

interface createReduxStoreParams {
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export function createReduxStore({
  initialState,
  asyncReducer,
  navigate,
}: createReduxStoreParams) {
  const rootReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(
    rootReducer as ReducersMapObject<StateSchema>
  );

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    preloadedState: initialState as StateSchema,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api: $api, navigate },
        },
      }),
  });

  // @ts-expect-error Временно
  store.reducerManager = reducerManager;

  return store;
}
