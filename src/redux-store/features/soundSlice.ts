/* app imports */
import { SoundState } from "../types/sound";
import { ActionType } from "../types/action";

const initialState = true;

/* reducer */
function soundReducer(state = initialState, action: ActionType) {
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
