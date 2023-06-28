import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../config/StateSchema';
import { type DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  intialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({
  children,
  intialState,
}: StoreProviderProps) => {
  const store = createReduxStore(intialState);
  return <Provider store={store}>{children}</Provider>;
};
