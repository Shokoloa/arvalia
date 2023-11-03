import { Helmet } from 'react-helmet';

function Histoire() {
    return (
        <section>
            <Helmet>
                <title>Arvalia | Histoire</title>
                <meta name="og:site_name" content="Histoire d'Arvalia"></meta>
            </Helmet>
            <main>
                <section className="lore-title">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, blanditiis. Voluptas recusandae illo
                        debitis veniam.</p>
                </section>
                <div className="separator" style={{ margin: '0 0 -20px 0' }}></div>
                <section className="timeline">
                    <article className="timeline__card">
                        <div className="timeline__content">
                            <h6 className="timeline__content-title">Partie 1 - La Guerre des Cieux</h6>
                            <p className="timeline__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                numquam dolorem sint fugit earum repellat explicabo ab pariatur at alias dolores, iusto beatae
                                nostrum ex quidem blanditiis laborum. Eius, maxime.</p>
                        </div>
                    </article>
                    <article className="timeline__card">
                        <div className="timeline__content">
                            <h6 className="timeline__content-title">Partie 2 - Les Pierres</h6>
                            <p className="timeline__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                numquam dolorem sint fugit earum repellat explicabo ab pariatur at alias dolores, iusto beatae
                                nostrum ex quidem blanditiis laborum. Eius, maxime.</p>
                        </div>
                    </article>
                    <article className="timeline__card">
                        <div className="timeline__content">
                            <h6 className="timeline__content-title">Partie 3 - Les Lieux</h6>
                            <p className="timeline__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                numquam dolorem sint fugit earum repellat explicabo ab pariatur at alias dolores, iusto beatae
                                nostrum ex quidem blanditiis laborum. Eius, maxime.</p>
                        </div>
                    </article>
                    <article className="timeline__card">
                        <div className="timeline__content">
                            <h6 className="timeline__content-title">Partie 4 - Les Classes</h6>
                            <p className="timeline__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                numquam dolorem sint fugit earum repellat explicabo ab pariatur at alias dolores, iusto beatae
                                nostrum ex quidem blanditiis laborum. Eius, maxime.</p>
                        </div>
                    </article>
                    <article className="timeline__card">
                        <div className="timeline__content">
                            <h6 className="timeline__content-title">Partie 5 - Les Enjeux</h6>
                            <p className="timeline__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                numquam dolorem sint fugit earum repellat explicabo ab pariatur at alias dolores, iusto beatae
                                nostrum ex quidem blanditiis laborum. Eius, maxime.</p>
                        </div>
                    </article>
                </section>
                <div className="separator" style={{ margin: '-20px 0 5vh 0' }}></div>
            </main>
        </section>
    );
}

export default Histoire;