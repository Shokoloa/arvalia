import logo from "../Assets/logo/arvalia-nobg-text.png";
import { Link } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <section className="footer-left">
        <Link to="/" className="footerlogo">
          <img src={logo} draggable={false} alt="" />
        </Link>
        <p>Fait avec <i className="fa-solid fa-heart"></i> par <Link to="/phoenix-rise">l'équipe d'Arvalia</Link></p>
        <p className="copyright">Arvalia © {year} Tous Droits Réservés.</p>
      </section>
      <section className="footer-right">
        <article className="footer-element">
          <h1>Ressources</h1>
          <div className="footerlinks">
            <Link to="/faq">
              <i className="uil uil-file-question-alt"></i>
              <p>FAQ</p>
            </Link>
            <Link to="/wiki">
              <i className="uil uil-book-alt"></i>
              <p>Wiki</p>
            </Link>
          </div>
        </article>
        <article className="footer-element">
          <h1>Chartes</h1>
          <div className="footerlinks">
            <Link to="/cgu">
              <i className="uil uil-shield-check"></i>
              <p className="desktop">Conditions d'Utilisation</p>
              <p className="phone">CGU</p>
            </Link>
            <Link to="/cgv">
              <i className="uil uil-usd-circle"></i>
              <p className="desktop">Conditions de Ventes</p>
              <p className="phone">CGV</p>
            </Link>
          </div>
        </article>
      </section>
    </footer>

  );
}

export default Footer;
