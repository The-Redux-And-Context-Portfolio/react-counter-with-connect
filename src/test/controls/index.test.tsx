/* node modules */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

/* app imports */
import reduxStore from "../../redux-store/store";
import renderWithProvider from "../render-with-provider";
import ControlsComponent from "../../components/controls";
import { counterReset } from "../../redux-store/actions/counter";
import { soundOn, soundOff } from "../../redux-store/actions/sound";

/* t-suite */
describe("ControlsComponent Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  const mockPreloadedState = {
    counter: 0,
    sound: false
  };

  test("check if button icons are rendered properly on load", () => {
    /* setup */
    renderWithProvider(<ControlsComponent />, {
      preloadedState: mockPreloadedState
    });

    /* element(s) */
    const soundOnIcon = screen.getByTitle("Sound Off");
    const resetIcon = screen.getByTitle("Counter - Reset");

    /* assertions */
    expect(soundOnIcon).toHaveAttribute("src", "mute-icon-white.svg");
    expect(resetIcon).toHaveAttribute("src", "reset-icon-white.svg");
  });

  test("check if buttons are rendered properly on load", () => {
    /* setup */
    renderWithProvider(<ControlsComponent />, {
      preloadedState: mockPreloadedState
    });

    /* element(s) */
    const soundBtn = screen.getByTestId("soundBtn");
    const resetBtn = screen.getByTestId("resetBtn");

    /* assertions - since they are similar expect functionality, group them */
    const buttonsArray = [soundBtn, resetBtn];
    buttonsArray.forEach((buttonElem) => {
      expect(buttonElem).toBeInTheDocument();
      expect(buttonElem).toHaveAttribute("type", "button");
      expect(buttonElem).not.toBeDisabled();
    });
  });
});
