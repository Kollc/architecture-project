import { type AppDispatch } from './types/store';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import {
  type StateSchema,
  type ReduxStoreWithManager,
  type ThunkExtraArg,
  type ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkExtraArg,
  type ThunkConfig,
};
