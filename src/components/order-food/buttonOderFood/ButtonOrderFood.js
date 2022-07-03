import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

import './buttonOrder.css';

export const ButtonOrder = () => {
  const { setIsOrder } = useContext(DataContext);
  const handlerStartOrder = () => {
    setIsOrder(true);
  };
  return (
    <div className="buttonOrder" onClick={handlerStartOrder}>
      <p className="buttonOrder__title">Order Food</p>
    </div>
  );
};
