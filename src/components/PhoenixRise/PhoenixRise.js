import React from 'react';
import poster from '../../Assets/logo/phoenix-rise.png';
import video from '../../Assets/images/vids/Intro_Phoenix_Rise.mp4';
import Gestion from './Gestion';
import Dev from './Dev';
import Design from './Design';
import OnlineCom from './OnlineCom';
import jsonData from './team.json';

class PhoenixRise extends React.Component {
  render() {
    return (
      <section className="team">
        <h1 className="teamtitle">Phoenix Rise</h1>
        <p className="teamsubtitle">Studio de développement</p>

        <h1 className="teamnames">Équipe de Gestion</h1>
        <Gestion data={jsonData} />
        <div className="separator"></div>

        <h1 className="teamnames">Équipe de Développement</h1>
        <Dev data={jsonData} />
        <div className="separator"></div>

        <h1 className="teamnames">Équipe de Conception</h1>
        <Design data={jsonData} />
        <div className="separator"></div>

        <h1 className="teamnames">Équipe de Support</h1>
        <OnlineCom data={jsonData} />
        <div className="separator"></div>

        <section className="studio-intro">
          <video autoPlay loop muted poster={poster}>
            <source src={video} type="video/mp4"></source>
          </video>
        </section>
      </section>
    )
  };
}

export default PhoenixRise;
