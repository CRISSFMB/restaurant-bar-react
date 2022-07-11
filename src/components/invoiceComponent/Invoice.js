import imgPayment from '../../assets/svgs/payment-icon.svg';

import './invoice.css';

export const Invoice = () => {
  return (
    <>
      <div className="Invoice">
        <div className="bill-wrapper">
          {/* <p className="Invoice-title">Congratulations!</p> */}
          <div className="flex-bill">
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
      </div>
    </>
  );
};
