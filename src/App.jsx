import Router from "preact-router";
import { useWindow } from './hooks/useWindow';

// Components
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import { PhoenixRise } from "./pages/PhoenixRise";
import { CGU } from "./pages/CGU";
import { CGV } from "./pages/CGV";
import { FAQ } from "./pages/FAQ";
import { Histoire } from "./pages/Histoire";
import { News } from "./pages/News";
import { Support } from "./pages/Support";
import { NotFound } from "./pages/404";
import { Wiki } from "./pages/Wiki";

// CSS
import "./index.css";
import "./medias.css";

export const App = () => {
  const win = useWindow();

  return (
    <div className="App text transition">
      <Navbar />
      <Background />
      <Router onChange={() => {
        if (win)
          win.scrollTo(0, 0);
      }
      }>
        <Home path="/" />
        <PhoenixRise path="/phoenix-rise" />
        <CGU path="/cgu" />
        <CGV path="/cgv" />
        <FAQ path="/faq" />
        <Histoire path="/histoire" />
        <News path="/news" />
        <Support path="/support" />
        
        <Wiki path="/wiki" />

        <NotFound default />
      </Router>
      <Footer />
    </div>
  );
};

