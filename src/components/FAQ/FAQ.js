import { Helmet } from 'react-helmet';
import jsonData from './faq.json';
import FAQuestions from './Cards';

function FAQ() {
    return (
        <section>
            <Helmet>
                <title>Arvalia | FAQ</title>
                <meta name="og:site_name" content="Foire Aux Questions"></meta>
            </Helmet>
            <main class="faq">
                <h1 class="title">Foire Aux Questions</h1>
                <p class="subtitle">Ici vous trouverez toutes les questions qui sont souvent posées sur notre support Discord.
                </p>
                <div class="separator"></div>

                <section class="faq-cards">
                    <div class="card-wrapper">
                        <section class="faq-card">
                            <article class="faq-ilustrations">
                                <img class="mobile pattern"
                                    src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg"
                                    draggable="false" alt="" />
                                <img class="mobile ilust"
                                    src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg"
                                    draggable="false" alt="" />
                            </article>

                            <main class="faq-content">
                                <h1>FAQ</h1>
                                <FAQuestions data={jsonData} />
                            </main>
                        </section>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default FAQ;