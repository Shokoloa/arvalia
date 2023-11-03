import { Helmet } from 'react-helmet';
import jsonData from './news.json';
import Articles from './Articles';

function News() {
    return (
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
}

export default News;