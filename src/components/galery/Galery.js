import { ButtonModal } from '../../UI/ButtonModal';
import { Modal } from '../modal/Modal';

import './galery.css';
import { Image } from './Image';

export const Galery = () => {
  const configButton = {
    type: 'button',
    classConfig: 'btn btn-outline-light mt-4',
    databstoggle: 'modal',
    databstarget: '#galeryModal',
    text: 'Open Galery',
  };

  const imagesGaleryClass = ['first-image', 'Second-image', 'Third-image'];

  const images = imagesGaleryClass.map((imageClass, idx) => (
    <Image imageClass={imageClass} idx={idx} key={idx} />
  ));

  return (
    <div className="galery">
      <div className="galery-wrapper">{images}</div>
      <ButtonModal config={configButton} />
      <Modal />
    </div>
  );
};
