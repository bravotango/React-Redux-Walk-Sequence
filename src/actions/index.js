export const increment = num => {
  return {
    type: "INCREMENT",
    payload: num
  };
};

export const decrement = num => {
  return {
    type: "DECREMENT",
    payload: num
  };
};

export const pause = () => {
  return {
    type: "PAUSE"
  };
};

export const reset = () => {
  return {
    type: "RESET"
  };
};

export const cycle = () => {
  return {
    type: "CYCLING"
  };
};

export const setIntervalId = id => {
  return {
    type: "SET_INTERVAL",
    payload: id
  };
};

export const clearIntervalId = id => {
  return {
    type: "CLEAR_INTERVAL",
    payload: id
  };
};
