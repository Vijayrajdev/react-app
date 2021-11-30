const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default reducer;
