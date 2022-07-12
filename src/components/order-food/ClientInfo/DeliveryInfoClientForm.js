import { useInput } from '../../../hook/use-input';
import './orderForm.css';

export const DeliveryInfoClientForm = () => {
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

  // getDataForm({
  //   nameValue: enteredNameValue,
  //   AddressValue: enteredAddressValue,
  //   emailValue: enteredEmailValue,
  //   phoneValue: enteredPhoneValue,
  // });

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
      </form>
    </div>
  );
};
