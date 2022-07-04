import classes from './Input.module.css';

const Input = ({ input: inputObj }) => {
  return (
    <div className={classes.form}>
      <label htmlFor={inputObj.id}>{inputObj.label}</label>
      <input {...inputObj} id={inputObj.id} />
    </div>
  );
};

export default Input;
