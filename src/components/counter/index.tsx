/* node modules */
import React from "react";
import { connect, ConnectedProps } from "react-redux";

/* app imports */
import useNumberName from "../hooks/use-number-name";
import mapStateToProps from "./redux-connect/map-state-to-props";

/* interface */
type PropsFromRedux = ConnectedProps<typeof connector>;
interface FCProps extends PropsFromRedux {
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
const connector = connect(mapStateToProps, {});
const CounterComponent = connector(Counter);
export default CounterComponent;
