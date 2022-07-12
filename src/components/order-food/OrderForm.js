import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { BackIcon } from '../icons/BackIcon';
import { Modal } from '../overlays/Modal';
import { DeliveryInfoClientForm } from './ClientInfo/DeliveryInfoClientForm';
import { OrderList } from './oder-list/OrderList';

export const OrderForm = () => {
  const { infoContext } = useContext(DataContext);
  return (
    <Modal>
      <div className="container">
        <div className="row">
          <button
            className="btn btn-outline-danger btn-lg mb-5"
            onClick={infoContext.handlerOnClose}
          >
            <BackIcon />
            back
          </button>

          <div className="col-12 col-lg-6 mb-1">
            <OrderList />
            <DeliveryInfoClientForm />
          </div>
        </div>
      </div>
    </Modal>
  );
};
