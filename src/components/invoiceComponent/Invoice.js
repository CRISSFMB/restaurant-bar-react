import React from 'react';
import { Check } from '../icons/Check';
import './invoice.css';

export const Invoice = () => {
  return (
    <div className="Invoice">
      {/* bill-wrapper */}
      <div className="bill-wrapper">
        <div className="header-invoice">
          <Check />
          <p className="header-invoice__paragraph">Payment Successfull</p>
        </div>
        <div className="wrapper-info-bill">
          <div>
            <p>Name</p>
            <p>Address</p>
            <p>Email</p>
            <p>TelefonNumer</p>
            <p>Method</p>
            <p>amount</p>
            <p>date Delivery</p>
            <p>time Delive</p>
          </div>
          {/* ---- */}
          <div>
            <p>Cristian</p>
            <p>Hohohnsweg 3</p>
            <p>cmosqbone1@gmail.com</p>
            <p>872309ß1293</p>
            <p>cash</p>
            <p>$234</p>
            <p>12/ 05 / 2022</p>
            <p>11 am</p>
          </div>
        </div>
      </div>
    </div>
  );
};
