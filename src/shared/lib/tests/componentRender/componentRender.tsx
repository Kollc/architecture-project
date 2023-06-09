import { render } from '@testing-library/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
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

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18ForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
