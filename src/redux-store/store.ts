/* node modules */
import { createStore } from "redux";

/* app imports */
import rootReducer from "./reducer";

/* store */
const reduxStore = createStore(rootReducer);

/* exports */
export default reduxStore;
