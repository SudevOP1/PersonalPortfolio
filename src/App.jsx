import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DataProvider from "./ContextData.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Preloader from "./components/Preloader.jsx";
import PageTransition from "./components/PageTransition.jsx";
import { useSmoothScroll, resetScroll } from "./lib/smoothScroll.js";

const INTRO_KEY = "sd-intro-played";

const Shell = () => {
  const location = useLocation();
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(INTRO_KEY) === "1" || location.pathname !== "/";
  });

  useSmoothScroll();

  // don't let the browser restore the old offset on reload / back
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  }, []);

  // every route change starts at the top
  useLayoutEffect(() => {
    resetScroll();
  }, [location.pathname]);

  const finishIntro = () => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setIntroDone(true);
  };

  return (
    <>
      {!introDone && <Preloader onDone={finishIntro} />}
      <Cursor />
      <Nav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home ready={introDone} />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <DataProvider>
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  </DataProvider>
);

export default App;
