import { BuyIcon } from '../../icons/BuyIcon';
import './pushorderbutton.css';

export const PushOrderButton = ({ handlerPushOrder }) => {
  return (
    <>
      <p className="text-center mt-4">
        If you have any questions give us a call at
      </p>
      <p className="text-center">+4951160696060</p>
      <div className="custom-button-order">
        <button
          className="btn btn-primary btn-lg mb-3 custom-button-order"
          onClick={handlerPushOrder}
        >
          <div>
            <BuyIcon />
          </div>
          ORDER NOW
        </button>
      </div>
      <p className="fs-6 text-center">
        Please be aware that this request form is not a confirmed purchase of
        your order. The establishment will contact you to confirm your order.
        Thank you for your order We are currently processing your order and will
        contact you soon OK THANKS
      </p>
    </>
  );
};
