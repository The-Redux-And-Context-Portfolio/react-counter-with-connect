/* app imports */
import { AppReduxState } from "../../../redux-store/types";

/* module */
function mapStateToProps(state: AppReduxState) {
  const { counter } = state;
  return { counter };
}

/* exports */
export default mapStateToProps;
