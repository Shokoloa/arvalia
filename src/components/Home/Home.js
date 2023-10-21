import RoadMap from "./RoadMap";
import Community from "./Community";
import Timer from "./Timer";
import Slideshow from "./SlideShow";

function Home() {
  return (
    <section>
      <main className="hero">
        <section className="hero-left">
          <h1><span>Arvalia</span> : The Awakening World</h1>
          <p>RPG Fantasy, Scénarisé & Indépendant</p>
          <a className="downloadbutton">Rejoignez Arvalia</a>
          <article className="stats">
            <article>
              <h1>0</h1>
              <p>Joueurs uniques</p>
            </article>
            <article>
              <h1>0</h1>
              <p>Joueurs journaliers</p>
            </article>
          </article>
        </section>
        <section className="hero-right">
          <article id="slideshow">
            <Slideshow />
          </article>
          <article id="navigation">
            <span className="point active"></span>
            <span className="point"></span>
            <span className="point"></span>
          </article>
        </section>
      </main>
      <RoadMap />
      <Community />
      <Timer />
    </section>
  );
}

export default Home;
