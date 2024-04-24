/* node modules */
import React from "react";
import { connect, ConnectedProps } from "react-redux";

/* app imports */
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";
import mapDispatchToProps from "./redux-connect/map-dispatch-to-props";
import mapStateToProps from "./redux-connect/map-state-to-props";
import useSoundHook from "../hooks/use-sound-hook";
import playResetSound from "../hooks/use-reset-click";

/* interface */
type PropsFromRedux = ConnectedProps<typeof connector>;
interface FCProps extends PropsFromRedux {
  sound: boolean;
  reset: () => void;
  soundOn: () => void;
  soundOff: () => void;
}

/* component */
function Controls(props: FCProps): JSX.Element {
  const { reset, soundOn, soundOff, sound } = props;
  const {
    handleOnSound, soundIcon
  } = useSoundHook({sound, soundOn, soundOff});

  function handleOnReset() {
    reset();
    //sound && playResetSound();
  }

  return (
    <>
      <div className="controls customRow">
        <button type="button" className="btn btn-default"
          data-testid="soundBtn"
          onClick={handleOnSound}>
          <img {...soundIcon} />
        </button>
        <button type="button" className="btn btn-default"
          data-testid="resetBtn"
          onClick={handleOnReset}>
          <img src={resetIconWhite} className="img-fluid center-block"
          alt="Counter - Reset" title="Counter - Reset"/>
        </button>
      </div>
    </>
  );
}

/* exports */
const connector = connect(mapStateToProps, mapDispatchToProps);
const ControlsComponent = connector(Controls);
export default ControlsComponent;
