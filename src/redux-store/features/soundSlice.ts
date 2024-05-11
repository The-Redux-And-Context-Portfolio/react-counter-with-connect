/* app imports */
import { ActionType } from "../types/action";

/**
 * takes care of the toggle state for sounds in the application. this is controlled based on the
 * input of the action that is being sent into the reducer
 **/
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
