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
  const mockPreloadedState = {
    counter: 0,
    sound: false
  };

  test("check if sound icon toggles correctly on click", async () => {
    /* setup */
    const user = userEvent.setup();
    renderWithProvider(<App />, {
      preloadedState: mockPreloadedState
    });

    /* before the click event - on page load */
    expect(screen.getByTitle("Sound Off")).toBeInTheDocument();

    /* element + user event */
    const soundBtn = screen.getByTestId("soundBtn");
    await user.click(soundBtn);

    /* after the click event */
    expect(await screen.findByTitle("Sound On")).toBeInTheDocument();

    /* another click event */
    await user.click(soundBtn);
    expect(screen.getByTitle("Sound Off")).toBeInTheDocument();
  });

  test("check if reset action.type works correctly on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    renderWithProvider(<App />, {
      preloadedState: mockPreloadedState
    });

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
    renderWithProvider(<App />, {
      preloadedState: mockPreloadedState
    });

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
    const { container } = renderWithProvider(<App />, {
      preloadedState: mockPreloadedState
    });
    /* assertions */
    expect(container.childElementCount).toBeGreaterThan(0);
  });
});
