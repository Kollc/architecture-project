import { type DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
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
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18ForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
