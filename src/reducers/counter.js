const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("increment by: " + action.payload);
      return state >= 7 ? 0 : state + action.payload;
    case "DECREMENT":
      return state <= 0 ? 7 : state - action.payload;
    case "RESET":
      console.log("reset");
      return 0;
    default:
      return state;
  }
};
export default counterReducer;
