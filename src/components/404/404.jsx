import { Helmet } from 'react-helmet';
import React from 'react';
import { useLocation } from "react-router-dom";
import './404.css';
import SVG from './SVGAnimation';

const NotFound = () => {
  let location = useLocation();

  document.querySelector("header").style.display = 'none';
  document.querySelector("footer").style.display = 'none';

  return (
    <section>
      <Helmet>
        <title>Arvalia | 404 Not Found</title>
        <meta name="og:site_name" content="Oh ! Il semblerait que ceci est la page 404 d'Arvalia, cette page est inutile pour vous !"></meta>
      </Helmet>
      <main className="notfound">
        <div class="container">
          <div class="row">
            <div>
              <SVG />
            </div>
            <div>
              <h1>Oups ! Vous vous êtes perdu.</h1>
              <p>La page <code>{location.pathname}</code> n'existe pas. Comment êtes-vous arrivé ici est un mystère.</p>
              <button onClick={() => window.location.href = '/'}>Retourner à l'accueil</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default NotFound;