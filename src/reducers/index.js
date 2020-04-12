import counterReducer from "./counter";
import cycleReducer from "./cycle";
import imageReducer from "./images";
import interval from "./interval";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isCycling: cycleReducer,
  images: imageReducer,
  interval: interval
});

export default allReducers;
