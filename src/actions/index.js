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
