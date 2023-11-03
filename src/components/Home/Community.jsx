import { Link } from "react-router-dom";
import ApiData from "./DiscordAPI";

function Community() {
    return (
        <section className="community">
            <section className="community-items">
                <article className="community-main">
                    <ApiData />
                    <Link to="/support" className="button"><i className="fa-brands fa-discord"></i> Rejoindre le Discord</Link>
                    <p className="socials">Rejoignez nous également sur :
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                    </p>
                    <div className="community-item-background" aria-hidden="true"></div>
                </article>
            </section>
        </section>
    );
}

export default Community;