import { Modal } from '../overlays/Modal';
import { DeliveryInfoClientForm } from './DeliveryInfoClientForm';

import { OrderList } from './OrderList';
import { PaymentMethod } from './PaymentMethod';
import { TimeDelivery } from './timeDelivery.js/TimeDelivery';

export const OrderForm = () => {
  return (
    <Modal>
      <div className="container">
        <DeliveryInfoClientForm />
        <OrderList />
        <TimeDelivery />
        <PaymentMethod />
      </div>
    </Modal>
  );
};
