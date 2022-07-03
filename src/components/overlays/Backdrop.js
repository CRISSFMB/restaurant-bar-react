import classes from './Modal.module.css';

export const Backdrop = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={onCloseModal}></div>;
};
