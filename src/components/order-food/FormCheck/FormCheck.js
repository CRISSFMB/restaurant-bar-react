import React from 'react';

export const FormCheck = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div class="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Cash
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            EC Card
          </label>
        </div>
      </div>
    </div>
  );
};
