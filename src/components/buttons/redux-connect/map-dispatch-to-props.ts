/* node modules */
import { Dispatch } from "react";

/* app imports */
import { ActionType } from "../../../redux-store/types/action";
import {
  counterIncrement, counterDecrement
} from "../../../redux-store/actions/counter";

/* module */
function mapDispatchToProps(dispatch: Dispatch<ActionType>) {
  return {
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement())
  }
}

/* exports */
export default mapDispatchToProps;
