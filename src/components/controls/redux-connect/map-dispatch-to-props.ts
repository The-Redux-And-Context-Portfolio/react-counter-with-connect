/* node modules */
import { Dispatch } from "react";

/* app imports */
import { ActionType } from "../../../redux-store/types/action";
import { counterReset } from "../../../redux-store/actions/counter";
import { soundOn, soundOff } from "../../../redux-store/actions/sound";

/* module */
function mapDispatchToProps(dispatch: Dispatch<ActionType>) {
  return {
    reset: () => dispatch(counterReset()),
    soundOn: () => dispatch(soundOn()),
    soundOff: () => dispatch(soundOff())
  }
}

/* exports */
export default mapDispatchToProps;
