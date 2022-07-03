import { Modal } from '../overlays/Modal';
import { DeliveryInfoClientForm } from './DeliveryInfoClientForm';
import { FormCheck } from './FormCheck/FormCheck';
import { OrderList } from './OrderList';
import { PaymentMethod } from './PaymentMethod';

export const OrderForm = () => {
  return (
    <Modal>
      <div className="container">
        <DeliveryInfoClientForm />
        <OrderList />
        <PaymentMethod />
        <FormCheck />
      </div>
    </Modal>
  );
};
