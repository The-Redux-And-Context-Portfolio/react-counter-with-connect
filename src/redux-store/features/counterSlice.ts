/* app imports */
import { CounterState } from "../types/counter";
import { ActionType } from "../types/action";

const initialState = 0;

/* reducer */
function counterReducer(state = initialState, action: ActionType) {
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
