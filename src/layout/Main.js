import { AvaliableMeals } from '../components/avaliableMeals/AvaliableMeals';
import { EventCard } from '../components/eventCard/EventCard';
import { Galery } from '../components/galery/Galery';
import { Hero } from '../components/hero/Hero';
import { Info } from '../components/info/Info';
import { Invoice } from '../components/invoiceComponent/Invoice';
import { OrderForm } from '../components/order-food/OrderForm';
import { Voucher } from '../components/vocher/Voucher';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const Main = () => {
  const {
    infoContext: { isOrder, invoice },
  } = useContext(DataContext);

  return (
    <div className="wrapper-main">
      <Hero />
      <AvaliableMeals />
      <Info />
      <Galery />
      <Voucher />
      <EventCard />
      {isOrder && <OrderForm />}
      {invoice && <Invoice />}
    </div>
  );
};
