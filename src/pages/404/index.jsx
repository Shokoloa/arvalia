import { useEffect } from 'preact/hooks';
import './404.css';
import { SVG } from './SVGAnimation';
import { useDocument } from '../../hooks/useDocument';

export const NotFound = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc) {
      doc.title = 'Arvalia | 404 Not Found';
      doc.querySelector('header').style.display = 'none';
      doc.querySelector('footer').style.display = 'none';
    }
  }, []);

  return (
    <section>
      <main className="notfound">
        <div class="container">
          <div class="row">
            <div>
              <SVG />
            </div>
            <div>
              <h1>Oups ! Vous vous êtes perdu.</h1>
              <p>La page <code>{window.location.pathname}</code> n'existe pas. Comment êtes-vous arrivé ici est un mystère.</p>
              <button onClick={() => window.location.href = '/'}>Retourner à l'accueil</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

