const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      return [...state, payload];
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

export default reducer;
