import App from 'app/App';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <StoreProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StoreProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
