import React from 'react';

export const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item">
      <img src={image} className="d-block w-100 " alt="..." />
    </div>
  );
};
