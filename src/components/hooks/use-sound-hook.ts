/* node modules */
import { useState } from "react";

/* app imports */
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";

/* interface */
interface HookProps {
  sound: boolean;
  soundOn?: () => void;
  soundOff?: () => void;
}

/* hook */
function useSoundHook(props: HookProps) {
  const { sound, soundOn, soundOff } = props;
  const [soundIcon, setSoundIcon] = useState<Record<string, any>>({
    src: sound ? soundIconWhite : muteIconWhite,
    className: "img-fluid center-block",
    alt: sound ? "Sound On" : "Sound Off",
    title: sound ? "Sound On" : "Sound Off"
  });

  function handleOnSound() {
    if (soundOn && soundOff) {
      if (sound) {
        soundOff();
        setSoundIcon(() => {
          return {
            src: muteIconWhite,
            className: "img-fluid center-block",
            alt: "Sound Off",
            title: "Sound Off"
          }
        });
      }
      else {
        soundOn();
        setSoundIcon(() => {
          return {
            src: soundIconWhite,
            className: "img-fluid center-block",
            alt: "Sound On",
            title: "Sound On"
          }
        });
      }
    }
  }

  return {
    handleOnSound,
    soundIcon
  }
}

/* exports */
export default useSoundHook;
