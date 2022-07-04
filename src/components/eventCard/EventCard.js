import React from 'react';

import steakEvent from '../../assets/steak.jpg';

export const EventCard = () => {
  return (
    <div
      className="card"
      style={{
        width: '100%',
        background: 'black',
        color: 'white',
        margin: '0 auto',
      }}
    >
      <div className="container">
        <div className="row p-1">
          <div className="col-12 col-md-6">
            <img src={steakEvent} className="card-img-top" alt="steak-event" />
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="card-body w-50 h-100 d-flex justify-content-center align-items-start flex-column">
              <h5 className="card-title">VISIT OUR EVENT</h5>
              <h5 className="card-title">
                Neue Karte mit Grillangeboten ab 15. August
              </h5>
              <p className="card-text">
                Wir haben eine reichhaltige Auswahl an gegrillten
                Fleischgerichten für euch in Planung! Die Beilagen, Salate und
                vieles mehr können dann von unserem Buffet zum gewählten Fleisch
                ausgesucht werden! Die Grillkarte gilt immer am Freitag &
                Samstag von 18:00 - 21:00 Uhr!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
