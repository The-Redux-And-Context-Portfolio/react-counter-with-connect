/* node modules */
import { combineReducers } from "redux";

/* app imports */
import counterReducer from "./features/counterSlice";
import soundReducer from "./features/soundSlice";

/**
 * the reducer has been created using combineReducers from "redux". this is being created without
 * any abstracted library like redux toolkit
 **/
const rootReducer = combineReducers({
  counter: counterReducer,
  sound: soundReducer
});

/* exports */
export default rootReducer;
