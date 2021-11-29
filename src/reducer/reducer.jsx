const initState = [
  {
    password: "12345",
  },
  {
    password: "pass123",
  },
  {
    password: "pa234",
  },
];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action];
    default:
      return state;
  }
};

export default reducer;
