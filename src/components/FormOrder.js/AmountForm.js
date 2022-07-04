import Input from '../../UI/Input';
import classes from './AmountForm.module.css';

export const AmountForm = ({ id }) => {
  const configurationInput = {
    label: 'amount',
    id: 'amount_' + id,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  return (
    <form className={classes.form}>
      <Input input={configurationInput} />
      <button type="button">+ Add</button>
    </form>
  );
};
