const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("action.arrayLength: " + action.payload.len);
      console.log("increment by: " + action.payload.num);
      return state >= action.payload.len ? 0 : state + action.payload.num;
    case "DECREMENT":
      return state <= 0 ? action.payload.len : state - action.payload.num;
    case "RESET":
      console.log("reset");
      return 0;
    default:
      return state;
  }
};
export default counterReducer;
