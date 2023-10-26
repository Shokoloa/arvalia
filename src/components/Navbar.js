import logo from "../Assets/logo/arvalia-nobg.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header id="nav-menu" aria-label="navigation bar">
      <Link to="/" className="logo">
        <img src={logo} draggable={false} alt="Logo" />
      </Link>
      <section className="navcontainer">
        <article className="nav-start">
          <nav className="menu">
            <ul className="menu-bar">
              <li><Link to="/" className="nav-link">Accueil</Link></li>
              <li><Link to="/news" className="nav-link">Actualités</Link></li>
              <li><Link to="/histoire" className="nav-link">Histoire</Link></li>
              <li className="nav-lastlink"><Link to="/phoenix-rise" className="nav-link">Phoenix Rise</Link></li>
              <li><Link to="/phoenix-rise" className="nav-link phone">Phoenix Rise</Link></li>
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