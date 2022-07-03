import './orderForm.css';

export const DeliveryInfoClientForm = () => {
  return (
    <div className="order-form mb-5">
      <h4 className="order-form__title mb-4 ">ORDER FOOD</h4>
      <form>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control backgrond-black `}
                  id="floatingInput"
                  placeholder="name"
                />
                <label htmlFor="floatingInput">Your name</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="adress"
                  className="form-control"
                  id="adress"
                  placeholder="adress"
                />
                <label htmlFor="phone">Your adress</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="email"
                />
                <label htmlFor="floatingPassword">Your email</label>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="form-floating">
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="phone"
                />
                <label htmlFor="phone">Your phone number</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
