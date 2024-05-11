/* app imports */
import {
  soundOn, soundOff
} from "../../redux-store/actions/sound";

/**
 * all redux store action functions are tested. the unit testing was done by treating action
 * creators as just regular functions
 */
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
