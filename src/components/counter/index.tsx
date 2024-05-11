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
  /* these are from the redux connect api - not from direct props from a parent level */
  const { counter } = props;

  /* custom hook */
  const { numberName } = useNumberName(counter);

  return (
    <>
      <div className="posContainer text-center">
        {/* the number */}
        <span className="num">{ counter }</span>
        {/* the name of the number */}
        <span className="name">{ numberName }</span>
      </div>
    </>
  );
}

/**
 * @exports
 * the reason why its broken down into these smaller pieces is because we need some way to
 * identify the type of props moving into the buttons component. so take a look at 'PropsFromRedux'
 * and how 'FCProps' extends from that
 **/
const connector = connect(mapStateToProps, {});
const CounterComponent = connector(Counter);
export default CounterComponent;
