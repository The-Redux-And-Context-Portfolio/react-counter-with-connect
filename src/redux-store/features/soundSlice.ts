/* app imports */
import { SoundState } from "../types/sound";
import { ActionType } from "../types/action";

const initialState: SoundState = {
  sound: true
};

/* reducer */
function soundReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'sound/off': {
      const updated = {...state};
      updated.sound = false;
      return updated;
    }

    case 'sound/on': {
      const updated = {...state};
      updated.sound = true;
      return updated;
    }

    default:
      return state;
  }
}

/* exports */
export default soundReducer;
