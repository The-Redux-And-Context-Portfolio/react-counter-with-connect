/* node modules */
import React from "react";
import { connect } from "react-redux";

/* app imports */
import mapDispatchToProps from "./redux-connect/map-dispatch-to-props";
import mapStateToProps from "./redux-connect/map-state-to-props";
import plusIconWhite from "../../assets/icons/plus-icon-ffffff.svg";
import minusIconWhite from "../../assets/icons/minus-icon-ffffff.svg";
import playClickSound from "../hooks/use-play-click";

/* interface */
interface FCProps {
  sound?: boolean;
  increment?: () => void;
  decrement?: () => void;
}

/* component */
function Buttons(props: FCProps): JSX.Element {
  const { increment, decrement, sound } = props;

  function handleOnIncrement() {
    if (increment) {
      increment();
      sound && playClickSound();
    }
  }

  function handleOnDecrement() {
    if (decrement) {
      decrement();
      sound && playClickSound();
    }
  }

  return (
    <>
      <div className="buttonContainer text-center customRow">
        <button type="button" className="btn btn-default counterBtn white decrement"
        onClick={handleOnDecrement}>
          <img src={minusIconWhite} className="img-fluid center-block"
          alt="Decrement" title="Decrement"/>
        </button>
        <button type="button" className="btn btn-default counterBtn white increment"
        onClick={handleOnIncrement}>
          <img src={plusIconWhite} className="img-fluid center-block"
          alt="Increment" title="Increment"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
