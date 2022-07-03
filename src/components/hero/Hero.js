import { ButtonOrder } from '../order-food/ButtonOrderFood';
import './hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__container__title">RESTAURANT & BAR GERADAUS</h1>
        <p className="hero__container__paragraph">
          Heute haben wir geöffnet bis 22:00
        </p>
        <ButtonOrder />
      </div>
    </div>
  );
};
