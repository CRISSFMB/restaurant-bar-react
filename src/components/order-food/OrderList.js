import React from 'react';

export const OrderList = () => {
  return (
    <div className="row mb-4">
      <h4>YOUR ORDER</h4>
      <div className="col-12">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Pizza
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Steak
            <span className="badge bg-primary rounded-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Nudel
            <span className="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
