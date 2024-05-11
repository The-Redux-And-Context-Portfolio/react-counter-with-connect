/* app imports */
import {
  counterReset,
  counterDecrement,
  counterIncrement
} from "../../redux-store/actions/counter";

/**
 * all redux store action functions are tested. the unit testing was done by treating action
 * creators as just regular functions
 */
describe("Counter Redux Actions Test Suite", () => {
  test("check if counter decrement returns the correct action", () => {
    const expectedAction = { type: "counter/decrement" };
    expect(counterDecrement()).toEqual(expectedAction);
  });

  test("check if counter increment returns the correct action", () => {
    const expectedAction = { type: "counter/increment" };
    expect(counterIncrement()).toEqual(expectedAction);
  });

  test("check if counter reset returns the correct action", () => {
    const expectedAction = { type: "counter/reset" };
    expect(counterReset()).toEqual(expectedAction);
  });
});
