import imagen2 from '../../assets/slider-pictures/slider-picture-2.jpg';
import { Button } from '../../UI/Button';

import './galery.css';

export const Galery = () => {
  return (
    <div className="galery">
      <div className="galery-wrapper">
        <div className="galery__img1"></div>
        <div className="galery__img2"></div>
        <div className="galery__img3"></div>
      </div>

      <Button text={'ABRIR GALERIA'} classbtn={'btn btn-primary'} />
    </div>
  );
};
