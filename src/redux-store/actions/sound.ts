/* app imports */
import { ActionType } from "../types/action";

/* sound - on */
function soundOn(): ActionType {
  return { type: "sound/on" };
}

/* sound - off */
function soundOff(): ActionType {
  return { type: "sound/off" };
}

/* exports */
export {
  soundOn, soundOff
}
