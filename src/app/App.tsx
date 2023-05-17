import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import 'app/styles/index.scss';

const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
