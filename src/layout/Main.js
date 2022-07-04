import { useState } from 'react';
import { AvaliableMeals } from '../components/avaliableMeals/AvaliableMeals';
import { EventCard } from '../components/eventCard/EventCard';
import { Galery } from '../components/galery/Galery';
import { Hero } from '../components/hero/Hero';
import { Info } from '../components/info/Info';
import { OrderForm } from '../components/order-food/OrderForm';
import { Voucher } from '../components/vocher/Voucher';

export const Main = () => {
  const [isOrder, setIsOrder] = useState(false);
  return (
    <div className="wrapper-main">
      {isOrder && <OrderForm />}
      <Hero setIsOrder={setIsOrder} />
      <AvaliableMeals />
      <Info />
      <Galery />
      <Voucher />
      <EventCard />
    </div>
  );
};
