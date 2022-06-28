import React from 'react';
import { Carousel } from '../components/carousel/Carousel';
import { Galery } from '../components/galery/Galery';
import { Hero } from '../components/hero/Hero';
import { Info } from '../components/info/Info';

export const Main = () => {
  return (
    <>
      <Hero />
      <Info />
      <Galery />
      {/* <Carousel /> */}
    </>
  );
};
