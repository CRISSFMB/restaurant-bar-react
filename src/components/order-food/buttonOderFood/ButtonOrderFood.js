import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { CartIcon } from '../../icons/CartIcon';
import './buttonOrder.css';

export const ButtonOrder = () => {
  const { cartContext, infoContext } = useContext(DataContext);

  const NumberOfItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="buttonOrder" onClick={infoContext.handlerStartOrder}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p>
        Your Order <CartIcon />
        {NumberOfItems}
      </p>
    </div>
  );
};
