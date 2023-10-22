import { Helmet } from 'react-helmet';
import React from 'react';

const NotFound = () => {
  return (
    <section>
      <Helmet>
        <title>Arvalia | 404 Not Found</title>
        <meta name="og:site_name" content="Oh ! Il semblerait que ceci est la page 404 d'Arvalia, cette page est inutile pour vous !"></meta>
      </Helmet>
      <div class="bg"></div>
      <main>
        <div class="container">
          <div class="row">
            <div>
              
            </div>
            <div>
              <h1>Oups ! Vous vous êtes perdu.</h1>
              <p>La page que vous recherchez n'existe pas. Comment êtes-vous arrivé ici est un mystère.</p>
              <button onclick="window.location.href = '/'">Accueil</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default NotFound;
