import React, { createContext, useReducer, useState } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import { infoReducer } from '../reducers/infoReducer';

export const DataContext = createContext(null);

const InitialState = {
  items: [],
  totalAmount: 0,
};

const informationClient = {
  allInfoForm: null,
  DateDelivery: 'no set',
  timeDelivery: 'no set',
  UserMethod: 'no set',
};

export const DataProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, InitialState);

  const [Infostate, infoDispatch] = useReducer(infoReducer, informationClient);

  // console.log(Infostate);

  const addItemHandler = (item) => {
    cartDispatch({
      type: 'ADD',
      payload: item,
    });
  };
  const removeItemHandler = (id) => {};

  /**************************************************************************/

  const [isOrder, setIsOrder] = useState(false);

  const handlerOnClose = () => {
    setIsOrder(false);
  };

  const handlerStartOrder = () => {
    setIsOrder(true);
  };

  /****************+++*/
  const addinfoForm = (info) => {
    infoDispatch({
      type: 'info',
      payload: info,
    });
  };
  const addDateDelivery = (datedelivery) => {
    infoDispatch({
      type: 'date',
      payload: datedelivery,
    });
  };
  const addTimeDelivery = (timeDelivery) => {
    infoDispatch({
      type: 'time',
      payload: timeDelivery,
    });
  };

  const addMethod = (method) => {
    infoDispatch({
      type: 'method',
      payload: method,
    });
  };

  /*enviado al provider*/
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  const infoContext = {
    Infostate: Infostate,
    isOrder: isOrder,
    handlerOnClose: handlerOnClose,
    handlerStartOrder: handlerStartOrder,
    addDateDelivery: addDateDelivery,
    addTimeDelivery: addTimeDelivery,
    addMethod: addMethod,
    addinfoForm: addinfoForm,
  };

  const data = {
    cartContext,
    infoContext,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
