import React from 'react';
import './info.css';

export const Info = () => {
  return (
    <div className="info">
      <div className="description-wrapper">
        <h3 className="description-wrapper__title">
          Sie können zum Mitnehmen bestellen | Hannover
        </h3>
        <p className="description-wrapper__paragraph">
          Ein schöner Abend mit deutschem Essen – wir servieren Ihnen frisch
          zubereitete Speisen in einer ansprechenden Atmosphäre. Unser
          gemütlicher Außenbereich ist bei sonnigem Wetter besonders einladend.
        </p>
        <h3 className="description-wrapper__title">
          Authentisches deutsches Restaurant, Insider-Tipp
        </h3>
        <p className="description-wrapper__paragraph">
          Lassen Sie sich von unserer deutschen Küche begeistern. Lassen Sie
          sich von un
        </p>
        <button>read more</button>
      </div>
    </div>
  );
};
