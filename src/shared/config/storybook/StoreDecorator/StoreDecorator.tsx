import { type DeepPartial } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';
import {
  type StateSchema,
  createReduxStore,
} from 'app/providers/StoreProvider';
import { Provider } from 'react-redux';

export const StoreDecorator =
  (initialState?: DeepPartial<StateSchema>) => (Story: StoryFn) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  };
