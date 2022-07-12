import { AvaliableMeals } from '../components/avaliableMeals/AvaliableMeals';
import { EventCard } from '../components/eventCard/EventCard';
import { Galery } from '../components/galery/Galery';
import { Hero } from '../components/hero/Hero';
import { Info } from '../components/info/Info';
import { Invoice } from '../components/invoiceComponent/Invoice';
import { OrderForm } from '../components/order-food/OrderForm';
import { Voucher } from '../components/vocher/Voucher';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const Main = () => {
  const { infoContext } = useContext(DataContext);

  return (
    <div className="wrapper-main">
      <Hero />
      <AvaliableMeals />
      <Info />
      <Galery />
      <Voucher />
      <EventCard />
      {infoContext.isOrder && <OrderForm />}
      {/* {IspushOrder && <Invoice />} */}
    </div>
  );
};
