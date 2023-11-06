import background from '../assets/images/background.png';

export const Background = () => (
  <div className="bg" id="bg">
    <img src={background} draggable={false} alt="" />
    <div className="star-field">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
    </div>
  </div>
);
