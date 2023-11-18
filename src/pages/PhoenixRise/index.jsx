import poster from '../../assets/logo/phoenix-rise.png';
import video from '../../assets/images/vids/Intro_Phoenix_Rise.mp4';
import { Card } from './Card';
import jsonData from './team.json';
import { useEffect } from 'preact/hooks';
import { useDocument } from '../../hooks/useDocument';

export const PhoenixRise = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia | Phoenix Rise';
  }, []);

  return (
    <section className="team">
      <h1 className="teamtitle">Phoenix Rise</h1>
      <p className="teamsubtitle">Studio de développement</p>

      <h3 className="teamnames">Équipe de Gestion</h3>
      <Card data={jsonData} team="gestion" />
      <div className="separator" style={{ width: '50%' }}></div>

      <h3 className="teamnames">Équipe de Développement</h3>
      <Card data={jsonData} team="dev" />
      <div className="separator" style={{ width: '50%' }}></div>

      <h3 className="teamnames">Équipe de Conception</h3>
      <Card data={jsonData} team="design" />
      <div className="separator" style={{ width: '50%' }}></div>

      <h3 className="teamnames">Équipe de Support</h3>
      <Card data={jsonData} team="modo" />
      <div className="separator" style={{ width: '50%' }}></div>

      <section className="studio-intro">
        <video autoPlay loop muted poster={poster}>
          <source src={video} type="video/mp4"></source>
        </video>
      </section>
    </section>
  );
};
