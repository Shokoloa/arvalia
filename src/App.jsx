import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

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

export const App = () => (
  <Router>
    <div className="App text transition">
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phoenix-rise" element={<PhoenixRise />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        
        <Route path="/wiki" element={<Wiki />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  </Router>
);

