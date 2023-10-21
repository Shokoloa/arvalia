import React from 'react';

function OnlineCom({ data }) {
    const filteredData = data.filter(user => user.team === "modo");

    return (
        <div className="teamcards">
            {filteredData.map((user, index) => {
                let titleColor = "";
                let descColor = "";
                let iconsColor = "";
                let birthdayButton = "";

                const today = new Date();
                const userBirthday = user.birthday.split("/");

                if (user.theme === "dark") {
                    titleColor = `#fff`;
                    descColor = `#d8d8d8`;
                    iconsColor = `#fff`;
                } else {
                    titleColor = `light`;
                    descColor = `#636b6f`;
                    iconsColor = `#26292B`;
                }

                let socials = [];

                socials.push(
                    <a key="discord" style={{ color: iconsColor }} onClick={() => window.open(`https://discord.com/users/${user.id}`)}>
                        <i className="fa-brands fa-discord"></i>
                    </a>
                );

                if (user.ytb) {
                    socials.push(
                        <a key="youtube" style={{ color: iconsColor }} onClick={() => window.open(user.ytb)}>
                            <i className="uil uil-youtube"></i>
                        </a>
                    );
                }

                if (user.insta) {
                    socials.push(
                        <a key="instagram" style={{ color: iconsColor }} onClick={() => window.open(user.insta)}>
                            <i className="uil uil-instagram"></i>
                        </a>
                    );
                }

                if (user.github) {
                    socials.push(
                        <a key="github" style={{ color: iconsColor }} onClick={() => window.open(user.github)}>
                            <i className="uil uil-github-alt"></i>
                        </a>
                    );
                }

                if (user.twitter) {
                    socials.push(
                        <a key="twitter" style={{ color: iconsColor }} onClick={() => window.open(user.twitter)}>
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                    );
                }

                if (parseInt(userBirthday[0], 10) === today.getDate() && parseInt(userBirthday[1], 10) === today.getMonth() + 1) {
                    birthdayButton = `<button onclick="happyBirthday('${user.name}')"><i style="color: ${iconsColor};" class="fa-solid fa-cake-candles"></i></button>`;
                }

                return (
                    <article className="team-card" key={index} style={{ backgroundColor: user.color }}>
                        <div className="team-card-header">
                            <div className="team-card-cover" style={{ backgroundImage: `url('https://japi.rest/discord/v1/user/${user.id}/avatar')` }}></div>
                            <img src={`https://japi.rest/discord/v1/user/${user.id}/avatar`} draggable="false" alt="" />
                            <h1 className="team-card-fullname" style={{ color: titleColor }}>{user.name}</h1>
                            <h2 className="team-card-jobtitle" style={{ color: titleColor }}>{user.role}</h2>
                        </div>
                        <div className="team-card-main">
                            <div className="team-card-section">
                                <div className="team-card-content">
                                    <div className="team-card-subtitle" style={{ color: titleColor }}>À propos</div>
                                    <p className="team-card-desc" style={{ color: descColor }}>{user.desc}</p>
                                </div>
                                <div className="team-card-social">
                                    <div className="left">
                                        {socials}
                                    </div>
                                    <div className="right">
                                        {birthdayButton}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default OnlineCom;