const interval = (state = null, action) => {
  switch (action.type) {
    case "CLEAR_INTERVAL":
      return null;
    case "SET_INTERVAL":
      return action.payload;
    default:
      return state;
  }
};

export default interval;
