/* app imports */
import clickSoundFile from "../../assets/sounds/click-sound.wav";

/**
 * provides a prepared sound file that can be played during a user event
 */
function playClickSound() {
  const clickSound = new Audio(clickSoundFile);
  return () => {
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

/* exports */
export default playClickSound();
