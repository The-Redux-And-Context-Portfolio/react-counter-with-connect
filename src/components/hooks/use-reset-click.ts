/* app imports */
import resetSoundFile from "../../assets/sounds/reset-sound.wav";

/**
 * provides a prepared sound file that can be played during a user event
 */
function playResetSound() {
  const resetSound = new Audio(resetSoundFile);
  return () => {
    resetSound.pause();
    resetSound.currentTime = 0;
    resetSound.play();
  };
}

/* exports */
export default playResetSound();
