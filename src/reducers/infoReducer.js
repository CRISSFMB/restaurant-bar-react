export const infoReducer = (state, action) => {
  switch (action.type) {
    case 'info':
      return action.payload;
    case 'time':
      return { ...state, timeDelivery: action.payload };
    case 'method':
      return { ...state, UserMethod: action.payload };
    case 'date':
      return { ...state, DateDelivery: action.payload };
    default:
      return state;
  }
};
