export const cartReducer = (state, action) => {
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
