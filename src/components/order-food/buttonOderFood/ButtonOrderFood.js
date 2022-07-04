import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import './buttonOrder.css';

export const ButtonOrder = ({ setIsOrder }) => {
  const { items } = useContext(DataContext);

  const handlerStartOrder = () => {
    setIsOrder(true);
  };

  const NumberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="buttonOrder" onClick={handlerStartOrder}>
      <p className="buttonOrder__title">Order Food {NumberOfItems}</p>
    </div>
  );
};
