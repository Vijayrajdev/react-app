const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      const { product } = state;
      return { ...state, product: [...product, payload] };
    default:
      return state;
  }
};

export default reducer;
