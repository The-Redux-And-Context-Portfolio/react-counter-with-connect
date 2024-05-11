/* app imports */
import { ActionType } from "../types/action";

/**
 * the reducer that takes care of the value of the counter. this will be controlled based on the
 * action that we are sending into the reducer
 **/
function counterReducer(state = 0, action: ActionType) {
  switch (action.type) {
    case 'counter/increment': {
      return ++state;
    }

    case 'counter/decrement': {
      return --state;
    }

    case 'counter/reset': {
      return 0;
    }

    default:
      return state;
  }
}

/* exports */
export default counterReducer;
