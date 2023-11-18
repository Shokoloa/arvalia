import jsonData from './news.json';
import { Articles } from './Articles';
import { useDocument } from '../../hooks/useDocument';
import { useEffect } from 'preact/hooks';

export const News = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia | Actualités';
  }, []);

  return (
    <section>
      <main className="news">
        <h1>Actualités</h1>
        <p>Suivez l'actualité d'Arvalia</p>
        <div className="separator" style={{ backgroundColor: 'transparent' }}></div>
        <Articles data={jsonData} />
      </main>
    </section>
  );
};
