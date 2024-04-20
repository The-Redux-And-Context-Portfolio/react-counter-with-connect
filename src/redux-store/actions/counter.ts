/* app imports */
import { ActionType } from "../types/action";

/* increment */
function counterIncrement(): ActionType {
  return { type: "counter/increment" };
}

/* decrement */
function counterDecrement(): ActionType {
  return { type: "counter/decrement" };
}

/* reset */
function counterReset(): ActionType {
  return { type: "counter/reset" };
}

/* exports */
export {
  counterReset,
  counterDecrement,
  counterIncrement
};
