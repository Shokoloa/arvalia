import { useEffect } from 'preact/hooks';
import { useDocument } from '../../hooks/useDocument';

export const Support = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia | Support';
  }, []);

  return (
    <section>
      <main>
        <p style={{ color: 'white'}}>Vous êtes en train d'être redirigé</p>
      </main>
    </section>
  );
}

