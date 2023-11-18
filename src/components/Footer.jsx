import logo from "../assets/logo/arvalia-nobg-text.png";
import heart from "../assets/images/heart.png";

export const Footer = () => (
  <footer className="footer" id="footer">
    <section className="footer-left">
      <a href="/" className="footerlogo">
        <img src={logo} draggable={false} alt="Logo" />
      </a>
      <p>Fait avec <img src={heart} draggable={false} alt="" /> par <a href="/phoenix-rise">l'équipe d'Arvalia</a></p>
      <p className="copyright">Arvalia © {new Date().getFullYear()} Tous Droits Réservés.</p>
    </section>
    <section className="footer-right">
      <article className="footer-element">
        <h6>Ressources</h6>
        <div className="footerlinks">
          <a href="/faq">
            <i className="uil uil-file-question-alt"></i>
            <p>FAQ</p>
          </a>
          <a href="/wiki">
            <i className="uil uil-book-alt"></i>
            <p>Wiki</p>
          </a>
        </div>
      </article>
      <article className="footer-element">
        <h6>Chartes</h6>
        <div className="footerlinks">
          <a href="/cgu">
            <i className="uil uil-shield-check"></i>
            <p>CGU</p>
          </a>
          <a href="/cgv">
            <i className="uil uil-usd-circle"></i>
            <p>CGV</p>
          </a>
        </div>
      </article>
    </section>
  </footer>
);
