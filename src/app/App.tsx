import "app/styles/index.scss";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutePage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>о сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutePage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
