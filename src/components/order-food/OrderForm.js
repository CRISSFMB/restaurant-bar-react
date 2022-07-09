import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { BackIcon } from '../icons/BackIcon';

import { Modal } from '../overlays/Modal';
import { DeliveryInfoClientForm } from './ClientInfo/DeliveryInfoClientForm';
import { OrderList } from './oder-list/OrderList';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { PushOrderButton } from './pushOrderButton/PushOrderButton';
import { TimeDelivery } from './timeDelivery.js/TimeDelivery';

export const OrderForm = ({ handlerOnClose, handlerPushOrder }) => {
  const { isOrderComplete } = useContext(DataContext);

  return (
    <Modal>
      <div className="container">
        <div className="row">
          <button
            className="btn btn-outline-danger btn-lg mb-5"
            onClick={handlerOnClose}
          >
            <BackIcon />
            back
          </button>
          <div className="col-12 col-lg-6 mb-1  ">
            <DeliveryInfoClientForm />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <OrderList />
          </div>
        </div>

        <TimeDelivery />

        <PaymentMethod handlerOnClose={handlerOnClose} />
        {isOrderComplete ? (
          <PushOrderButton handlerPushOrder={handlerPushOrder} />
        ) : (
          <p>PLEASE COMPLETE THE FORMULARY TO ORDER</p>
        )}
      </div>
    </Modal>
  );
};
