import { Link } from "react-router-dom";
import ApiData from "./DiscordAPI";

function Community() {
    return (
        <section className="community">
            <section className="community-items">
                <article className="community-main">
                    <ApiData />
                    <a className="button" as={Link} to="/"><i className="fa-brands fa-discord"></i> Rejoindre le Discord</a>
                    <p className="socials">Rejoignez nous également sur :
                        <a as={Link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fa-brands fa-youtube"></i></a>
                        <a as={Link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fa-brands fa-instagram"></i></a>
                        <a as={Link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fa-brands fa-tiktok"></i></a>
                        <a as={Link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fa-brands fa-x-twitter"></i></a>
                    </p>
                    <div className="community-item-background" aria-hidden="true"></div>
                </article>
            </section>
        </section>
    );
}

export default Community;