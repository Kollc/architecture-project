import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';
import {
  type StateSchema,
  createReduxStore,
} from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { Provider } from 'react-redux';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
};

export const StoreDecorator =
  (
    initialState?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
    (Story: StoryFn) => {
      const reducers = { ...defaultAsyncReducers, ...asyncReducer };
      const store = createReduxStore(initialState as StateSchema, reducers);

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    };
