import logo from "../Assets/logo/arvalia-nobg-text.png";
import { Link } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <section className="footer-left">
        <a className="footerlogo" to="/">
          <img src={logo} draggable={false} alt="" />
        </a>
        <p>Fait avec <i className="fa-solid fa-heart"></i> par <a as={Link} to="/">l'équipe d'Arvalia</a></p>
        <p className="copyright">Arvalia © {year} Tous Droits Réservés.</p>
      </section>
      <section className="footer-right">
        <article className="footer-element">
          <h1>Ressources</h1>
          <div className="footerlinks">
            <a as={Link} to="/">
              <i className="uil uil-file-question-alt"></i>
              <p>FAQ</p>
            </a>
            <a as={Link} to="/">
              <i className="uil uil-book-alt"></i>
              <p>Wiki</p>
            </a>
          </div>
        </article>
        <article className="footer-element">
          <h1>Chartes</h1>
          <div className="footerlinks">
            <a as={Link} to="/">
              <i className="uil uil-shield-check"></i>
              <p className="desktop">Conditions d'Utilisation</p>
              <p className="phone">CGU</p>
            </a>
            <a as={Link} to="/">
              <i className="uil uil-usd-circle"></i>
              <p className="desktop">Conditions de Ventes</p>
              <p className="phone">CGV</p>
            </a>
          </div>
        </article>
      </section>
    </footer>

  );
}

export default Footer;
