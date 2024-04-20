/* app imports */
import { SoundState } from "../types/sound";
import { ActionType } from "../types/action";

const initialState: SoundState = {
  isMuted: false
};

/* reducer */
function soundReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'sound/off': {
      const updated = {...state};
      updated.isMuted = true;
      return updated;
    }

    case 'sound/on': {
      const updated = {...state};
      updated.isMuted = false;
      return updated;
    }

    default:
      return state;
  }
}

/* exports */
export default soundReducer;
