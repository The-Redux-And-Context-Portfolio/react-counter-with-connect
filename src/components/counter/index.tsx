/* node modules */
import React from "react";
import { connect } from "react-redux";

/* app imports */
import useNumberName from "../hooks/use-number-name";
import mapStateToProps from "./redux-connect/map-state-to-props";

/* interface */
interface FCProps {
  counter: number;
}

/* component */
function Counter(props: FCProps): JSX.Element {
  const { counter } = props;
  const { numberName } = useNumberName(counter);

  return (
    <>
      <div className="posContainer text-center">
        <span className="num">{ counter }</span>
        <span className="name">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default connect(mapStateToProps, {})(Counter);
