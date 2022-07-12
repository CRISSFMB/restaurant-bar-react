import { useContext } from 'react';
import imgPayment from '../../assets/svgs/payment-icon.svg';
import { DataContext } from '../../context/DataContext';

import './invoice.css';

export const Invoice = () => {
  const {
    infoContext: { infoClientOrder },
  } = useContext(DataContext);

  console.log(infoClientOrder);

  const {
    AddressValue,
    data,
    emailValue,
    method,
    nameValue,
    phoneValue,
    time,
    totalAmount,
  } = infoClientOrder;

  return (
    <>
      <div className="Invoice">
        <div className="bill-wrapper">
          <div className="flex-bill">
            <p className="Invoice-title">Congratulations!</p>

            <div className="flex-content">
              <div className="img-payment">
                <img src={imgPayment} />
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
                  <p>{nameValue}</p>
                  <p>{AddressValue}3</p>
                  <p>{emailValue}</p>
                  <p>+49 {phoneValue}</p>
                  <p>{method}</p>
                  <p>$ {totalAmount}</p>
                  <p>{data}</p>
                  <p>{time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
