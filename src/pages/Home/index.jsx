import slide1 from "../../assets/images/pics/IMG_0351.jpg";
import slide2 from "../../assets/images/pics/IMG_0350.jpg";
import slide3 from "../../assets/images/pics/IMG_0349.jpg";
import { RoadMap } from "./RoadMap";
import { Community } from "./Community";
import { Timer } from "./Timer";
import { useState, useEffect } from 'preact/hooks';
import { useDocument } from '../../hooks/useDocument';

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia';

    const slideshowInterval = setInterval(() => {
      setActiveSlide((prevActiveSlide) => (prevActiveSlide % 3) + 1);
    }, 5000);

    return () => clearInterval(slideshowInterval);
  }, []);

  let canClick = true;

  const animateButton = (e) => {
    if (canClick) {
      canClick = false;
      e.target.classList.add('animate');
      setTimeout(() => {
        e.target.classList.remove('animate');
      }, 500);

      setTimeout(() => {
        canClick = true;
      }, 1000);
    }
  };

  if (doc) {
    let bubblyButtons = doc.getElementsByClassName("downloadbutton");
    for (let i = 0; i < bubblyButtons.length; i++)
      bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  return (
    <section>
      <main className="hero">
        <section className="hero-left">
          <h1><span>Arvalia</span> : The Awakening World</h1>
          <p>RPG Fantasy, Scénarisé & Indépendant</p>
          <button className="downloadbutton">Rejoignez Arvalia</button>
          <article className="stats">
            <article>
              <h6>0</h6>
              <p>Joueurs uniques</p>
            </article>
            <article>
              <h6>0</h6>
              <p>Joueurs journaliers</p>
            </article>
          </article>
        </section>
        <section className="hero-right">
          <article id="slideshow">
            <img
              className={activeSlide === 1 ? 'slide slide-active' : 'slide'}
              src={slide1}
              draggable={false}
              alt="Slide1"
            />
            <img
              className={activeSlide === 2 ? 'slide slide-active' : 'slide'}
              src={slide2}
              draggable={false}
              alt="Slide2"
            />
            <img
              className={activeSlide === 3 ? 'slide slide-active' : 'slide'}
              src={slide3}
              draggable={false}
              alt="Slide3"
            />
          </article>
          <article id="navigation">
            <span className={activeSlide === 1 ? 'point point-active' : 'point'}></span>
            <span className={activeSlide === 2 ? 'point point-active' : 'point'}></span>
            <span className={activeSlide === 3 ? 'point point-active' : 'point'}></span>
          </article>
        </section>
      </main>
      <RoadMap />
      <Community />
      <Timer />
    </section>
  );
};

