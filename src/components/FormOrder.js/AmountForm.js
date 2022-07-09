import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './AmountForm.module.css';

export const AmountForm = ({ onAddToCart, id }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const configurationInput = {
    label: 'Menge',
    id: 'amount_' + id,
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

    onAddToCart(enteredValueAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={handlerAmountSubmit}>
      <Input input={configurationInput} ref={amountInput} />
      <button className="mt-4 mt-md-0">+ hinzufügen</button>
      {!isAmountValid && <p>Bitte wählen Sie eine Mahlzeit zwischen (1 - 5)</p>}
    </form>
  );
};
