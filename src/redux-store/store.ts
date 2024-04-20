/* node modules */
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

/* app imports */
import rootReducer from "./reducer";

/* store */
const reduxStore = createStore(rootReducer, composeWithDevTools());

/* exports */
export default reduxStore;
