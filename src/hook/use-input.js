import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.payload };
    case 'BLUR':
      return { ...state, isTouched: action.payload };
    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(inputStateReducer, initialState);

  const { value: enteredValue, isTouched } = state;

  const handlerChange = (e) => {
    dispatch({ type: 'INPUT', payload: e.target.value });
  };

  const handlerBlur = () => {
    dispatch({ type: 'BLUR', payload: true });
  };
  const valueIsValid = validateValue(enteredValue);
  const hasError = !validateValue(enteredValue) && isTouched;

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    valueIsValid,
    handlerBlur,
    handlerChange,
    enteredValue,
    hasError,
    reset,
  };
};
