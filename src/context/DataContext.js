import React, { createContext, useReducer, useState } from 'react';

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

const InitialStateinfo = {
  infoData: [],
  DateDelivery: '',
  timeDelivery: '',
  method: '',
};

const infoReducer = (state, action) => {
  switch (action.type) {
    case 'addInfo':
      return { ...state, infoData: action.payload };
    case 'AddDataDelivery':
      return { ...state, DateDelivery: action.payload };
    case 'AddDataTime':
      return { ...state, timeDelivery: action.payload };
    case 'addMethod':
      return { ...state, method: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, InitialState);

  const [Infostate, infoDispatch] = useReducer(infoReducer, InitialStateinfo);

  const [isOrderComplete, setIsOrderComplete] = useState(false);

  console.log(Infostate);

  /*handlers*/

  const addItemHandler = (item) => {
    cartDispatch({
      type: 'ADD',
      payload: item,
    });
  };
  const removeItemHandler = (id) => {};

  // info functions
  const addInfoClient = (info) => {
    infoDispatch({
      type: 'addInfo',
      payload: info,
    });
  };
  const addDateDelivery = (datedelivery) => {
    infoDispatch({
      type: 'AddDataDelivery',
      payload: datedelivery,
    });
  };
  const addTimeDelivery = (timeDelivery) => {
    infoDispatch({
      type: 'AddDataTime',
      payload: timeDelivery,
    });
  };

  const addMethod = (method) => {
    infoDispatch({
      type: 'addMethod',
      payload: method,
    });
  };

  /*enviado al provider*/
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    Infostate: Infostate.infoData,
    addInfoClient: addInfoClient,
    addDateDelivery: addDateDelivery,
    addTimeDelivery: addTimeDelivery,
    addMethod: addMethod,
    isOrderComplete: isOrderComplete,
  };

  return (
    <DataContext.Provider value={cartContext}>{children}</DataContext.Provider>
  );
};
