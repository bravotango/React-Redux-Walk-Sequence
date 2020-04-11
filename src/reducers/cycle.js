const cycleReducer = (state = false, action) => {
  switch (action.type) {
    case "CYCLING":
      return true;
    case "PAUSE":
      return false;
    default:
      return state;
  }
};

export default cycleReducer;
