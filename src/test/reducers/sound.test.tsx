/* app imports */
import soundReducer from "../../redux-store/features/soundSlice";
import { soundOn, soundOff } from "../../redux-store/actions/sound";

/**
 * all reducers were tested like they were just regular javascript functions. params were passed
 * along with a particular action payload
 */
describe("Sound Reducer Redux Test Suite", () => {
  test("check if correct state is returned for sound.off", () => {
    const action = soundOff();
    const result = soundReducer(true, action);
    expect(result).toBe(false);
  });

  test("check if correct state is returned for sound.on", () => {
    const action = soundOn();
    const result = soundReducer(false, action);
    expect(result).toBe(true);
  });

  test("check if correct state is returned for incorrect action", () => {
    const incorrectAction = { type: "hello world" };
    const result = soundReducer(false, incorrectAction);
    expect(result).toBe(false);
  });

  test("check if default value of 'true' is returned for undefined state", () => {
    const incorrectAction = { type: "hello world" };
    const result = soundReducer(undefined, incorrectAction);
    expect(result).toBe(true);
  });
});
