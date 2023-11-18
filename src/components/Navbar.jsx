import { useState } from "preact/hooks";
import logo from "../assets/logo/arvalia-nobg.png";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header id="nav-menu" aria-label="navigation bar">
      <a href="/" className="logo">
        <img src={logo} draggable={false} alt="Logo" />
      </a>
      <section className="navcontainer">
        <article className="nav-start">
          <nav className={`menu ${show ? 'show' : ''}`}>
            <ul className="menu-bar">
              <li><a href="/" className="nav-link">Accueil</a></li>
              <li><a href="/news" className="nav-link">Actualités</a></li>
              <li><a href="/histoire" className="nav-link">Histoire</a></li>
              <li className="nav-lastlink"><a href="/phoenix-rise" className="nav-link">Phoenix Rise</a></li>
              <li><a href="/phoenix-rise" className="nav-link phone">Phoenix Rise</a></li>
            </ul>
          </nav>
        </article>
        <label className="nav-end">
          <input type="checkbox" id="hamburger" onClick={() => setShow(!show)} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </section>
    </header>
  );
};

