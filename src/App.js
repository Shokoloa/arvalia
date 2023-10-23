import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

// Pages
import Home from "./components/Home/Home";
import PhoenixRise from "./components/PhoenixRise/PhoenixRise";
import CGU from "./components/CGU/CGU";
import CGV from "./components/CGV/CGV";
import FAQ from "./components/FAQ/FAQ";
import Histoire from "./components/Histoire/Histoire";
import News from "./components/News/News";
import Support from "./components/Redirects/Support";
import NotFound from "./components/404/404";

// CSS
import "./style.css";
import "./medias.css";
import "./App.css";

function App() {
  return (
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;