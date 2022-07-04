import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './AmountForm.module.css';

export const AmountForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const configurationInput = {
    label: 'amount',
    id: 'amount_',
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  const amountInput = useRef();

  const handlerAmountSubmit = (e) => {
    e.preventDefault();

    const enteredValueAmount = amountInput.current.value;
    const enteredValueAmountNumber = +enteredValueAmount;

    if (
      enteredValueAmount.trim().length === 0 ||
      enteredValueAmountNumber < 1 ||
      enteredValueAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredValueAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={handlerAmountSubmit}>
      <Input input={configurationInput} ref={amountInput} />
      <button>+ Add</button>
      {!isAmountValid && <p>Please Choose a Meal (1 - 5)</p>}
    </form>
  );
};
