import { BackIcon } from '../icons/BackIcon';
import { Modal } from '../overlays/Modal';
import { DeliveryInfoClientForm } from './ClientInfo/DeliveryInfoClientForm';
import { OrderList } from './oder-list/OrderList';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { TimeDelivery } from './timeDelivery.js/TimeDelivery';

export const OrderForm = () => {
  return (
    <Modal>
      <div className="container">
        <div className="row">
          <button className="btn btn-outline-danger btn-lg mb-5">
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
        <PaymentMethod />
      </div>
    </Modal>
  );
};
