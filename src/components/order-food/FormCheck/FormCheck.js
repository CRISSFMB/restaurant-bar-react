import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

export const FormCheck = () => {
  const { infoContext } = useContext(DataContext);
  const changeHanlderCheck = (e) => {
    const checkValue = e.target.value;
    infoContext.addMethod(checkValue);
  };
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={changeHanlderCheck}
          value="cash"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Cash
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value={'EC Card'}
          onChange={changeHanlderCheck}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          EC Card
        </label>
      </div>
    </>
  );
};
