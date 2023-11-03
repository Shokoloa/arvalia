import logo from "../assets/logo/arvalia-nobg-text.png";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer" id="footer">
    <section className="footer-left">
      <Link to="/" className="footerlogo">
        <img src={logo} draggable={false} alt="Logo" />
      </Link>
      <p>Fait avec <img src="https://i.ibb.co/vhPbhYT/heart-angle-svgrepo-com.png" draggable={false} alt="" /> par <Link to="/phoenix-rise">l'équipe d'Arvalia</Link></p>
      <p className="copyright">Arvalia © {new Date().getFullYear()} Tous Droits Réservés.</p>
    </section>
    <section className="footer-right">
      <article className="footer-element">
        <h6>Ressources</h6>
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
        <h6>Chartes</h6>
        <div className="footerlinks">
          <Link to="/cgu">
            <i className="uil uil-shield-check"></i>
            <p>CGU</p>
          </Link>
          <Link to="/cgv">
            <i className="uil uil-usd-circle"></i>
            <p>CGV</p>
          </Link>
        </div>
      </article>
    </section>
  </footer>
);
