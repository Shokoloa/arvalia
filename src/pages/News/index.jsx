import { Helmet } from 'react-helmet';
import jsonData from './news.json';
import { Articles } from './Articles';

export const News = () => (
  <section>
    <Helmet>
      <title>Arvalia | Actualités</title>
      <meta name="og:site_name" content="Actualités d'Arvalia"></meta>
    </Helmet>
    <main className="news">
      <h1>Actualités</h1>
      <p>Suivez l'actualité d'Arvalia</p>
      <div className="separator" style={{ backgroundColor: 'transparent' }}></div>
      <Articles data={jsonData} />
    </main>
  </section>
);

