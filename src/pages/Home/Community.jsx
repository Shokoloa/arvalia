import { ApiData } from "./DiscordAPI";

export const Community = () => (
  <section className="community">
    <section className="community-items">
      <article className="community-main">
        <ApiData />
        <a href="/support" className="button"><i className="fa-brands fa-discord"></i> Rejoindre le Discord</a>
        <p className="socials">Rejoignez nous également sur :
          <span>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
          </span>
        </p>
        <div className="community-item-background" aria-hidden="true"></div>
      </article>
    </section>
  </section>
);

