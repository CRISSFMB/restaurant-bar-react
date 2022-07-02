import { Carousel } from '../carousel/Carousel';

export const Modal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="galeryModal"
        tabIndex="-1"
        aria-labelledby="galeryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-black text-white">
            <div className="modal-header">
              <h5 className="modal-title" id="galeryModalLabel">
                Galery
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Carousel />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
