import React, { useState } from 'react';
import { Button } from '../../UI/Button';
import { Expand } from './Expand';
import './info.css';

export const Info = () => {
  const [isExpand, setIsExpand] = useState(false);
  const expandHanlder = () => {
    setIsExpand(true);
  };

  const closeExpandHanlder = () => {
    setIsExpand(false);
  };

  const showControlBtn = !isExpand ? (
    <Button
      text={'Read More'}
      onClick={expandHanlder}
      classbtn={'btn btn-light'}
    />
  ) : (
    <Button
      text={'Close'}
      onClick={closeExpandHanlder}
      classbtn={'btn btn-danger'}
    />
  );
  return (
    <>
      <div className="info">
        <div className="description-wrapper">
          <h3 className="description-wrapper__title">
            Sie können zum Mitnehmen bestellen | Hannover
          </h3>
          <p className="description-wrapper__paragraph">
            Ein schöner Abend mit deutschem Essen – wir servieren Ihnen frisch
            zubereitete Speisen in einer ansprechenden Atmosphäre. Unser
            gemütlicher Außenbereich ist bei sonnigem Wetter besonders
            einladend.
          </p>
          <h3 className="description-wrapper__title">
            Authentisches deutsches Restaurant, Insider-Tipp
          </h3>
          <p className="description-wrapper__paragraph">
            Lassen Sie sich von unserer deutschen Küche begeistern. Lassen Sie
            sich von un
          </p>
          {isExpand && <Expand />}
        </div>

        {showControlBtn}
      </div>
    </>
  );
};
