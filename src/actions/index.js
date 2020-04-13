export const increment = (num, len) => {
  return {
    type: "INCREMENT",
    payload: { num, len }
  };
};

export const decrement = (num, len) => {
  return {
    type: "DECREMENT",
    payload: { num, len }
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
