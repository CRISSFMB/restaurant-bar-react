import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { OrderItem } from './OrderItem';

export const OrderList = () => {
  const { items, totalAmount } = useContext(DataContext);

  console.log(items);
  return (
    <>
      <h4>YOUR ORDER</h4>
      <ul className="list-group">
        {items.map((item) => {
          return <OrderItem key={item.id} {...item} />;
        })}
      </ul>
      <p>TOTAL Amount : ${totalAmount}</p>
    </>
  );
};
