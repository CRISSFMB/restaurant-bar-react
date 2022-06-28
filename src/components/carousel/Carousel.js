import imagen1 from '../../assets/slider-pictures/slider-picture-1.jpg';
import imagen2 from '../../assets/slider-pictures/slider-picture-2.jpg';
import imagen3 from '../../assets/slider-pictures/slider-picture-3.jpg';
import imagen4 from '../../assets/slider-pictures/slider-picture-4.jpg';
import imagen5 from '../../assets/slider-pictures/slider-picture-5.jpg';
import imagen6 from '../../assets/slider-pictures/slider-picture-6.jpg';
import imagen7 from '../../assets/slider-pictures/slider-picture-7.jpg';
import './carousel.css';

export const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen5} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen6} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen7} className="d-block w-100 " alt="..." />
          </div>
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
