import imagen1 from '../../assets/slider-pictures/slider-picture-1.jpg';
import imagen2 from '../../assets/slider-pictures/slider-picture-2.jpg';
import imagen3 from '../../assets/slider-pictures/slider-picture-3.jpg';
import imagen4 from '../../assets/slider-pictures/slider-picture-4.jpg';
import imagen5 from '../../assets/slider-pictures/slider-picture-5.jpg';
import imagen6 from '../../assets/slider-pictures/slider-picture-6.jpg';
import imagen7 from '../../assets/slider-pictures/slider-picture-7.jpg';
import './carousel.css';
import { CarouselItem } from './CarouselItem';

export const Carousel = () => {
  const images = [imagen2, imagen3, imagen4, imagen5, imagen6, imagen7];

  const itemActive = (
    <div className="carousel-item active">
      <img src={imagen1} className="d-block w-100 " alt="..." />
    </div>
  );
  const anotheritems = images.map((image, index) => {
    return <CarouselItem key={index} image={image} />;
  });
  return (
    <div className="carousel-wrapper">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {itemActive}
          {anotheritems}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
