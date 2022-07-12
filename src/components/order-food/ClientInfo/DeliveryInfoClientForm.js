import { useInput } from '../../../hook/use-input';
import { BuyIcon } from '../../icons/BuyIcon';
import './orderForm.css';
import './pushorderbutton.css';

export const DeliveryInfoClientForm = () => {
  const handlerDate = (e) => {
    const dateValue = e.target.value;
  };

  const handlerSelectTime = (e) => {
    const timeValue = e.target.value;
  };

  const changeHanlderCheck = (e) => {
    const checkValue = e.target.value;
  };

  const validateNameValue = (value) => {
    const isInputValid = value.trim() !== '';
    return isInputValid;
  };

  const validateAddressValue = (value) => {
    const isInputValid = value.trim() !== '';
    return isInputValid;
  };

  const validateEmailValue = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const isInputValid = phone.trim() > 4;
    return isInputValid;
  };

  const {
    handlerBlur: handlerNameBlur,
    handlerChange: handlerInputNameChange,
    enteredValue: enteredNameValue,
    valueIsValid: IsInputNameValid,
    hasError: nameInputIsInValid,
    setuserTouch: setenteredNameTouch,
    setEnteredValue: setEnteredName,
  } = useInput(validateNameValue);

  const {
    handlerBlur: handlerAddressBlur,
    handlerChange: handlerInputAddressChange,
    enteredValue: enteredAddressValue,
    valueIsValid: IsInputAddressValid,
    hasError: AddressInputIsInValid,
    setuserTouch: setenteredAddressTouch,
    setEnteredValue: setEnteredAddress,
  } = useInput(validateAddressValue);

  const {
    handlerBlur: handlerEmailBlur,
    handlerChange: handlerInputEmailChange,
    enteredValue: enteredEmailValue,
    valueIsValid: IsInputEmailValid,
    hasError: EmailInputIsInValid,
    setuserTouch: setenteredEmailTouch,
    setEnteredValue: setEnteredEmail,
  } = useInput(validateEmailValue);

  const {
    handlerBlur: handlerPhoneBlur,
    handlerChange: handlerInputPhoneChange,
    enteredValue: enteredPhoneValue,
    valueIsValid: IsInputPhoneValid,
    hasError: PhoneInputIsInValid,
    setuserTouch: setenteredPhoneTouch,
    setEnteredValue: setEnteredPhone,
  } = useInput(validatePhoneNumber);

  let formValidate = false;

  if (IsInputNameValid && IsInputEmailValid && IsInputPhoneValid) {
    formValidate = true;
  }

  const dataForm = {
    nameValue: enteredNameValue,
    AddressValue: enteredAddressValue,
    emailValue: enteredEmailValue,
    phoneValue: enteredPhoneValue,
  };

  console.log(dataForm);

  return (
    <div className="order-form mb-5">
      <h4 className="order-form__title mb-4 ">Client Information </h4>
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
                  onChange={handlerInputNameChange}
                  onBlur={handlerNameBlur}
                  value={enteredNameValue}
                />
                <label htmlFor="floatingInput">Your name</label>
                {nameInputIsInValid && <p> name dont can be empty</p>}
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="address"
                  className="form-control"
                  id="adress"
                  placeholder="adress"
                  onChange={handlerInputAddressChange}
                  onBlur={handlerAddressBlur}
                  value={enteredAddressValue}
                />
                <label htmlFor="phone">Your adress</label>
                {AddressInputIsInValid && <p> Address dont can be empty</p>}
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
                  onChange={handlerInputEmailChange}
                  onBlur={handlerEmailBlur}
                  value={enteredEmailValue}
                />
                <label htmlFor="floatingPassword">Your email</label>
                {EmailInputIsInValid && <p>Please enter a Email valid</p>}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="form-floating">
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="phone"
                  onChange={handlerInputPhoneChange}
                  onBlur={handlerPhoneBlur}
                  value={enteredPhoneValue}
                />
                <label htmlFor="phone">Your phone number</label>
                {PhoneInputIsInValid && <p>Please enter a phone valid</p>}
              </div>
            </div>
          </div>
        </div>

        {/* end information client */}

        {/* start time delivery and data  */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className={`form-control backgrond-black `}
                  id="date"
                  placeholder="date"
                  onChange={handlerDate}
                />
                <label htmlFor="date">Date Delivery</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating mb-3">
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Time
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    defaultValue="DEFAULT"
                    onChange={handlerSelectTime}
                  >
                    <option value="DEFAULT">Please choose your hour</option>
                    <option value="10am">10am</option>
                    <option value="11am">11am</option>
                    <option value="12am">12am</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end time delivery and data  */}

        {/* PaymentMethod */}

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

        {/* buttonorder */}

        <p className="text-center mt-4">
          If you have any questions give us a call at
        </p>
        <p className="text-center">+4951160696060</p>
        <div className="custom-button-order">
          <button className="btn btn-primary btn-lg mb-3 custom-button-order">
            <div>
              <BuyIcon />
            </div>
            ORDER NOW
          </button>
        </div>
        <p className="fs-6 text-center">
          Please be aware that this request form is not a confirmed purchase of
          your order. The establishment will contact you to confirm your order.
          Thank you for your order We are currently processing your order and
          will contact you soon OK THANKS
        </p>
      </form>
    </div>
  );
};
