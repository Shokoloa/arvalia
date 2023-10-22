import { Link } from "react-router-dom";

function RoadMap() {
  return (
    <section className="work-layout">
      <article id="how-it-works" className="layout">
        <div className="how-it-works__roadmap">
          <div className="work-item work-item--subtitle primary">
            <div className="work-item--subtitle__container">
              <div className="work-item--subtitle__container__title">
                <h4>Comment <span className="highlight">installer Arvalia ?</span></h4>
              </div>
            </div>
            <p className="work-item--subtitle__text">Si vous voulez installer Arvalia, voici comment faire :</p>
          </div>
          <ol className="work-item work-item--roadmap how-it-works__roadmap__roadmap">
            <li className="work-item--roadmap__step">
              <div className="work-item--roadmap__step__number">
                <span>1</span>
              </div>
              <div className="work-item--roadmap__content">
                <h6 className="work-item--roadmap__content__title">Téléchargez l'Epic Games Store</h6>
                <p className="work-item--roadmap__content__text">Pour installer Arvalia, vous devrez télécharger l'<a href="https://store.epicgames.com/fr/download" target="_blank" rel="noreferrer">Epic Games Store</a></p>
              </div>
            </li>
            <li className="work-item--roadmap__step">
              <div className="work-item--roadmap__step__number">
                <span>2</span>
              </div>
              <div className="work-item--roadmap__content">
                <h6 className="work-item--roadmap__content__title">Installez Arvalia</h6>
                <p className="work-item--roadmap__content__text">Une fois l'Epic Games Store installé, recherchez Arvalia, acceptez les conditions et bon jeu !</p>
              </div>
            </li>
          </ol>
        </div>
      </article>
      <article className="layout-helpcenter">
        <section className="helpcenter-second">
          <article className="helpcenter-item">
            <div className="left">
              <i className="uil uil-question-circle"></i>
            </div>
            <div className="right">
              <h1>Vous avez des questions ?</h1>
              <Link to="/faq">Rendez-vous sur notre FAQ <i className="uil uil-arrow-right"></i></Link>
            </div>
          </article>
          <article className="helpcenter-item">
            <div className="left">
              <i className="uil uil-comment-alt-dots"></i>
            </div>
            <div className="right">
              <h1>Vous rencontrez un problème ?</h1>
              <Link to="/support">Rendez-vous sur notre support défié <i className="uil uil-arrow-right"></i></Link>
            </div>
          </article>
        </section>
        <section className="helpcenter-main">
          <button>Rejoindre Arvalia</button>
          <p>Disponible uniquement sur <i className="fa-brands fa-windows"></i> et <i className="fa-brands fa-apple"></i></p>
        </section>
      </article>
    </section>
  );
}

export default RoadMap;