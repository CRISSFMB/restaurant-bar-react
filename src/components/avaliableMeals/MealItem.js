import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { AmountForm } from '../FormOrder.js/AmountForm';

export const MealItem = (props) => {
  const { addItem } = useContext(DataContext);

  const handlerAddToCart = (amount) => {
    addItem({
      amount: amount,
      price: props.price,
      id: props.id,
      name: props.name,
    });
  };

  return (
    <div className="avaliable-meals">
      <div className="avaliable-des">
        <div className="avaliable-item__image">
          <img src={props.image} />
        </div>
        <div className="info-meals">
          <p className="info-meals__title">{props.title}</p>
          <hr />
          <p className="info-meals__description">{props.description}</p>
          <hr />
          <p>{`$${props.price}`}</p>
        </div>
      </div>

      <AmountForm onAddToCart={handlerAddToCart} id={props.id} />

      <hr />
    </div>
  );
};
