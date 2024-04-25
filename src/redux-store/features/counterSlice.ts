/* app imports */
import { ActionType } from "../types/action";

/* reducer */
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
