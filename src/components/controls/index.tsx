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
  /* these are from the redux connect api - not from direct props from a parent level */
  const { reset, soundOn, soundOff, sound } = props;

  /* custom hook */
  const {
    handleOnSound, soundIcon
  } = useSoundHook({sound, soundOn, soundOff});

  /* event handler */
  function handleOnReset() {
    reset();
    sound && playResetSound();
  }

  return (
    <>
      <div className="controls customRow">
        {/* sound button */}
        <button type="button" className="btn btn-default"
          data-testid="soundBtn"
          onClick={handleOnSound}>
          <img {...soundIcon} />
        </button>

        {/* reset button */}
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

/**
 * @exports
 * the reason why its broken down into these smaller pieces is because we need some way to
 * identify the type of props moving into the buttons component. so take a look at 'PropsFromRedux'
 * and how 'FCProps' extends from that
 **/
const connector = connect(mapStateToProps, mapDispatchToProps);
const ControlsComponent = connector(Controls);
export default ControlsComponent;
