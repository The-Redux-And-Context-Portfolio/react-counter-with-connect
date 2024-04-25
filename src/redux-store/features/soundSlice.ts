/* app imports */
import { ActionType } from "../types/action";

/* reducer */
function soundReducer(state = true, action: ActionType) {
  switch (action.type) {
    case 'sound/off': {
      return false;
    }

    case 'sound/on': {
      return true;
    }

    default:
      return state;
  }
}

/* exports */
export default soundReducer;
