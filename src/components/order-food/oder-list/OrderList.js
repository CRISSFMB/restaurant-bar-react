import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { OrderItem } from './OrderItem';

export const OrderList = () => {
  const { cartContext } = useContext(DataContext);
  return (
    <>
      <h4>YOUR ORDER</h4>
      <ul className="list-group">
        {cartContext.items.map((item) => {
          return <OrderItem key={item.id} {...item} />;
        })}
      </ul>
      <p>TOTAL Amount : ${cartContext.totalAmount}</p>
    </>
  );
};
