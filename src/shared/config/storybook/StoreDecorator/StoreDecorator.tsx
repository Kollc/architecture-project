import { type StoryFn } from '@storybook/react';
import {
  type StateSchema,
  createReduxStore,
} from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { Provider } from 'react-redux';
import { type ReducersList } from 'shared/lib/hooks/useAsyncReducer/useAsyncReducer';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (
    initialState?: DeepPartial<StateSchema>,
    asyncReducer?: ReducersList
  ) =>
    (Story: StoryFn) => {
      const reducers = { ...defaultAsyncReducers, ...asyncReducer };
      const store = createReduxStore({ initialState, asyncReducer: reducers });

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    };
