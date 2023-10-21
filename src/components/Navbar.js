import logo from "../Assets/logo/arvalia-nobg.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header id="nav-menu" aria-label="navigation bar">
      <a className="logo" to="/">
        <img src={logo} draggable={false} alt="" />
      </a>
      <section className="navcontainer">
        <article className="nav-start">
          <nav className="menu">
            <ul className="menu-bar">
              <li><a className="nav-link" as={Link} to="/">Accueil</a></li>
              <li><a className="nav-link" as={Link} to="/">Actualités</a></li>
              <li><a className="nav-link" as={Link} to="/">Histoire</a></li>
              <li className="nav-lastlink"><a className="nav-link" as={Link} to="/">Phoenix Rise</a></li>
              <li><a className="nav-link phone" as={Link} to="/">Phoenix Rise</a></li>
            </ul>
          </nav>
        </article>
        <label className="nav-end">
          <input type="checkbox" id="hamburger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </section>
    </header>
  );
}

export default NavBar;
