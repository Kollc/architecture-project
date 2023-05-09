import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { classNames } from "../../helpers/classNames/classNames";
import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../../pages/MainPage/MainPage.async";
import { useTheme } from "../../theme/useTheme";
import "./../../styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", {}, [theme])}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>о сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
