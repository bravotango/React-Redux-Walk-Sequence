import counterReducer from "./counter";
import cycleReducer from "./cycle";
import imageReducer from "./images";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isCycling: cycleReducer,
  images: imageReducer
});

export default allReducers;
