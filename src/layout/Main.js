import { EventCard } from '../components/eventCard/EventCard';
import { Galery } from '../components/galery/Galery';
import { Hero } from '../components/hero/Hero';
import { Info } from '../components/info/Info';

import { Voucher } from '../components/vocher/Voucher';

export const Main = () => {
  return (
    <div className="wrapper-main">
      <Hero />
      <Info />
      <Galery />
      <Voucher />
      <EventCard />
    </div>
  );
};
