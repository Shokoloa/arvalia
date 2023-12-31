import jsonData from './faq.json';
import { FAQuestions } from './Cards';
import { useEffect } from 'preact/hooks';
import { useDocument } from '../../hooks/useDocument';

export const FAQ = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia | FAQ';
  }, []);

  return (
    <section>
      <main class="faq">
        <h1 class="title">Foire Aux Questions</h1>
        <p class="subtitle">Ici vous trouverez toutes les questions qui sont souvent posées sur notre support Discord.</p>
        <div className="separator" style={{ backgroundColor: 'transparent' }}></div>

        <section class="faq-cards">
          <div class="card-wrapper">
            <section class="faq-card">
              <article class="faq-ilustrations">
                <img class="mobile pattern"
                  src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg"
                  draggable="false" alt="Illustration1" />
                <img class="mobile ilust"
                  src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg"
                  draggable="false" alt="Illustration2" />
              </article>

              <main class="faq-content">
                <h4>FAQ</h4>
                <FAQuestions data={jsonData} />
              </main>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
};

