/* app imports */
import {
  soundOn, soundOff
} from "../../redux-store/actions/sound";

/* t-suite */
describe("Sound Redux Actions Test Suite", () => {
  test("check if sound.on returns the correct action", () => {
    const expectedAction = { type: "sound/off" };
    expect(soundOff()).toEqual(expectedAction);
  });

  test("check if sound.on returns the correct action", () => {
    const expectedAction = { type: "sound/on" };
    expect(soundOn()).toEqual(expectedAction);
  });
});
