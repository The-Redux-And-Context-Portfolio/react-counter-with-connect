/* node modules */
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

/* app imports */
import { AppReduxState } from "./types";
import rootReducer from "./reducer";

/* store */
const defaultState: AppReduxState = {
  counter: 0,
  sound: true
};
function createReduxStore(preloadedState = defaultState) {
  const reduxStore = createStore(rootReducer, preloadedState, composeWithDevTools());
  return reduxStore;
}

/* exports */
export default createReduxStore;
export type AppStore = ReturnType<typeof createReduxStore>;
