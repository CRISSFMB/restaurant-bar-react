import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { ButtonOrder } from '../order-food/buttonOderFood/ButtonOrderFood';
import './hero.css';

export const Hero = ({ setIsOrder }) => {
  const { items } = useContext(DataContext);

  console.log(items);
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__container__title">RESTAURANT & BAR GERADAUS</h1>
        <p className="hero__container__paragraph">
          Heute haben wir geöffnet bis 22:00
        </p>

        {items.length <= 0 ? (
          <div className="alert alert-info" role="alert">
            please choose your favorite food
          </div>
        ) : (
          <ButtonOrder setIsOrder={setIsOrder} />
        )}
      </div>
    </div>
  );
};
