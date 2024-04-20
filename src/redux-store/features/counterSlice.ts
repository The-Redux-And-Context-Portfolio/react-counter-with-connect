/* app imports */
import { CounterState } from "../types/counter";
import { ActionType } from "../types/action";

const initialState: CounterState = {
  counter: 0
};

/* reducer */
function counterReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'counter/increment': {
      const updated = {...state};
      updated.counter += 1;
      return updated;
    }

    case 'counter/decrement': {
      const updated = {...state};
      updated.counter -= 1;
      return updated;
    }

    case 'counter/reset': {
      return { counter: 0 };
    }

    default:
      return state;
  }
}

/* exports */
export default counterReducer;
