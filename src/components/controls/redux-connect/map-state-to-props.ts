/* app imports */
import { AppReduxState } from "../../../redux-store/types/index";

/* module */
function mapStateToProps(state: AppReduxState) {
  const { sound } = state;
  return sound;
}

/* exports */
export default mapStateToProps;
