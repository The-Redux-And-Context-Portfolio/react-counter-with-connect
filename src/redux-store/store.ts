/* node modules */
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

/* app imports */
import { AppReduxState } from "./types";
import rootReducer from "./reducer";

/**
 * state: this is the default state that we'll be passing into the store incase we're not getting
 * any other params when we're initializing the store
 **/
const defaultState: AppReduxState = {
  counter: 0,
  sound: true
};

/**
 * the store - the barebones setup for redux store without redux toolkit
 **/
function createReduxStore(preloadedState = defaultState) {
  const reduxStore = createStore(rootReducer, preloadedState, composeWithDevTools());
  return reduxStore;
}

/* exports */
export default createReduxStore;
export type AppStore = ReturnType<typeof createReduxStore>;
