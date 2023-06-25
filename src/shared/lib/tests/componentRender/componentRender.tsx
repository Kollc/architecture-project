import { type DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import {
  createReduxStore,
  type StateSchema,
} from 'app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import i18ForTests from 'shared/config/i18n/i18ForTests';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = '/', initialState } = options;

  const store = createReduxStore(initialState as StateSchema);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18ForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </Provider>
  );
};
