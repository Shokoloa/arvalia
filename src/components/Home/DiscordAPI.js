import React, { useEffect, useState } from 'react';

function ApiData() {
    const [guildData, setGuildData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://discord.com/api/guilds/998280124707377223/widget.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                setGuildData(data);
            })
            .catch((error) => {
                setError('Error fetching data');
            });
    }, []);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <div>
                    <p className="community-main-count">
                        <span className="dot">
                            <span className="animate-ping"></span>
                            <span className="content-dot"></span>
                        </span>
                        <span id="api-guildpresence">{guildData ? `${guildData.presence_count} membres en ligne` : 'Chargement en cours...'}</span>
                    </p>
                    <h6>Rejoignez la communauté en ligne !</h6>
                    <p className="joinguild">Rejoignez le serveur <span id="api-guildname">{guildData ? guildData.name : 'Chargement en cours...'}</span></p>
                </div>
            )}
        </div>
    );
}

export default ApiData;