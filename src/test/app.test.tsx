/* node modules */
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';

/* app imports */
import reduxStore from "../redux-store/store";
import renderWithProvider from "./render-with-provider";
import App from "../App";
import userEvent from "@testing-library/user-event";
import {
  counterDecrement, counterIncrement
} from "../redux-store/actions/counter";

/* t-suite */
describe("App Component Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test("check if reset action.type works correctly on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    const spyDispatch = jest.spyOn(reduxStore, "dispatch");
    renderWithProvider(<App />);

    /* element(s) */
    const incBtn = screen.getByTestId("incBtn");
    const resetBtn = screen.getByTestId("resetBtn");

    /* here - check to see if the values reset */
    await user.click(incBtn);
    await user.click(resetBtn);
    expect(await screen.findByText("0")).toBeInTheDocument();
    expect(await screen.findByText("zero")).toBeInTheDocument();
  });

  test("check if number display changes on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    const spyDispatch = jest.spyOn(reduxStore, "dispatch");
    renderWithProvider(<App />);

    /* element(s) */
    const incBtn = screen.getByTestId("incBtn");
    const decBtn = screen.getByTestId("decBtn");

    /* now -> event - increment + assertions */
    await user.click(incBtn);
    expect(await screen.findByText("1")).toBeInTheDocument();
    expect(await screen.findByText("one")).toBeInTheDocument();

    /* now -> event - decrement + assertions */
    await user.click(decBtn);
    expect(await screen.findByText("0")).toBeInTheDocument();
    expect(await screen.findByText("zero")).toBeInTheDocument();
  });

  test("check if component has children", () => {
    /* setup */
    const { container } = renderWithProvider(<App />);
    /* assertions */
    expect(container.childElementCount).toBeGreaterThan(0);
  });
});
