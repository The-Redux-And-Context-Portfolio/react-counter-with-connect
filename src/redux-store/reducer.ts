/* node modules */
import { combineReducers } from "redux";

/* app imports */
import counterReducer from "./features/counterSlice";
import soundReducer from "./features/soundSlice";

/* reducer */
const rootReducer = combineReducers({
  counter: counterReducer,
  sound: soundReducer
});

/* exports */
export default rootReducer;
