/* app imports */
import counterReducer from "../../redux-store/features/counterSlice";
import { counterReset, counterDecrement, counterIncrement } from "../../redux-store/actions/counter";

/* t-suite */
describe("Counter Reducer Redux Test Suite", () => {
  test("check if state is reset to 'zero' as per action type payload", () => {
    const result = counterReducer(2, counterReset());
    expect(result).toBe(0);
  });

  test("check if state is incremented as per action type payload", () => {
    const result = counterReducer(2, counterDecrement());
    expect(result).toBe(1);
  });

  test("check if state is incremented as per action type payload", () => {
    const result = counterReducer(2, counterIncrement());
    expect(result).toBe(3);
  });

  test("check if default state is return for wrong action payload", () => {
    const actionPayload = {type: "hello world"};
    const result = counterReducer(0, actionPayload);
    expect(result).toBe(0);
  });
});
