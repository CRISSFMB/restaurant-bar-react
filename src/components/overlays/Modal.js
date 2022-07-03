import ReactDOM from 'react-dom';
import { Backdrop } from './Backdrop';
import { ModalOverlay } from './ModalOverlay';

export const Modal = (props) => {
  const portalElement = document.getElementById('overlays');

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
