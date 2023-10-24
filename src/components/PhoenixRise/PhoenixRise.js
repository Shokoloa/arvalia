import React from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <title>Arvalia | Phoenix Rise</title>
          <meta name="og:site_name" content="Équipe de Phoenix Rise"></meta>
        </Helmet>
        <h1 className="teamtitle">Phoenix Rise</h1>
        <p className="teamsubtitle">Studio de développement</p>

        <h3 className="teamnames">Équipe de Gestion</h3>
        <Gestion data={jsonData} />
        <div className="separator" style={{ width: '50%' }}></div>

        <h3 className="teamnames">Équipe de Développement</h3>
        <Dev data={jsonData} />
        <div className="separator" style={{ width: '50%' }}></div>

        <h3 className="teamnames">Équipe de Conception</h3>
        <Design data={jsonData} />
        <div className="separator" style={{ width: '50%' }}></div>

        <h3 className="teamnames">Équipe de Support</h3>
        <OnlineCom data={jsonData} />
        <div className="separator" style={{ width: '50%' }}></div>

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
