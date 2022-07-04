import React from 'react';
import classes from './Input.module.css';
const Input = React.forwardRef(({ input: inputObj }, ref) => {
  return (
    <div className={classes.form}>
      <label htmlFor={inputObj.id}>{inputObj.label}</label>
      <input ref={ref} {...inputObj} id={inputObj.id} />
    </div>
  );
});

export default Input;
