import React, { createContext, useReducer } from 'react';

export const DataContext = createContext(null);

// reducer
const InitialState = {
  items: [],
  totalAmount: 0,
};
/// context

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const arrayItemsUpdate = state.items.concat(action.payload);
    const totalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    return {
      items: arrayItemsUpdate,
      totalAmount: totalAmount,
    };
  }

  return state;
};

export const DataProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, InitialState);

  /*handlers*/

  const addItemHandler = (item) => {
    cartDispatch({
      type: 'ADD',
      payload: item,
    });
  };
  const removeItemHandler = (id) => {};

  /*enviado al provider*/
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <DataContext.Provider value={cartContext}>{children}</DataContext.Provider>
  );
};
