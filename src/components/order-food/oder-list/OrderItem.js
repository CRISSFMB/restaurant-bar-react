import React from 'react';

export const OrderItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <span className="badge bg-primary rounded-pill">{props.amount}</span>
    </li>
  );
};
