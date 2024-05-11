/* node modules */
import React from "react";
import { connect, ConnectedProps } from "react-redux";

/* app imports */
import mapDispatchToProps from "./redux-connect/map-dispatch-to-props";
import mapStateToProps from "./redux-connect/map-state-to-props";
import plusIconWhite from "../../assets/icons/plus-icon-ffffff.svg";
import minusIconWhite from "../../assets/icons/minus-icon-ffffff.svg";
import playClickSound from "../hooks/use-play-click";

/* interface */
type PropsFromRedux = ConnectedProps<typeof connector>;
interface FCProps extends PropsFromRedux {
  sound: boolean;
  increment: () => void;
  decrement: () => void;
}

/* component */
function Buttons(props: FCProps): JSX.Element {
  /* these are from the redux connect api - not from direct props from a parent level */
  const { increment, decrement, sound } = props;

  /* event handler */
  function handleOnIncrement() {
    increment();
    sound && playClickSound();
  }

  /* event handler */
  function handleOnDecrement() {
    decrement();
    sound && playClickSound();
  }

  return (
    <>
      <div className="buttonContainer text-center customRow">
        {/* decrement button */}
        <button type="button" className="btn btn-default counterBtn white decrement"
        data-testid="decBtn"
        onClick={handleOnDecrement}>
          <img src={minusIconWhite} className="img-fluid center-block"
          alt="Decrement" title="Decrement"/>
        </button>

        {/* increment button */}
        <button type="button" className="btn btn-default counterBtn white increment"
        data-testid="incBtn"
        onClick={handleOnIncrement}>
          <img src={plusIconWhite} className="img-fluid center-block"
          alt="Increment" title="Increment"/>
        </button>
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
const connector = connect(mapStateToProps, mapDispatchToProps);
const ButtonComponent = connector(Buttons);
export default ButtonComponent;
