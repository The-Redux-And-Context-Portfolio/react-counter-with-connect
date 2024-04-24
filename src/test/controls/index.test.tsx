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

  test("check if 'sound-toggle' action.type is sent on btn click", async () => {
    /* setup */
    const user = userEvent.setup();
    const spyDispatch = jest.spyOn(reduxStore, "dispatch");
    renderWithProvider(<ControlsComponent />);

    /* element(s) */
    const soundBtn = screen.getByTestId("soundBtn");
    await user.click(soundBtn);

    expect(await screen.findByTitle("Sound Off")).toBeInTheDocument();
    expect(spyDispatch).toHaveBeenCalledWith(soundOff());

    await user.click(soundBtn);

    expect(await screen.findByTitle("Sound On")).toBeInTheDocument();
    expect(spyDispatch).toHaveBeenCalledWith(soundOn());
  });

  test("check if 'counter-reset' action.type is sent on btn click", async () => {
    /* setup */
    const user = userEvent.setup();
    const spyDispatch = jest.spyOn(reduxStore, "dispatch");
    renderWithProvider(<ControlsComponent />);

    /* element + event */
    const resetBtn = screen.getByTestId("resetBtn");
    await user.click(resetBtn);

    /* assertions */
    expect(spyDispatch).toHaveBeenCalledWith(counterReset());
    expect(spyDispatch).toHaveBeenCalledTimes(1);
  });

  test("check if button icons are rendered properly on load", () => {
    /* setup */
    renderWithProvider(<ControlsComponent />);

    /* element(s) */
    const soundOnIcon = screen.getByTitle("Sound On");
    const resetIcon = screen.getByTitle("Counter - Reset");

    /* assertions */
    expect(soundOnIcon).toHaveAttribute("src", "sound-icon-white.svg");
    expect(resetIcon).toHaveAttribute("src", "reset-icon-white.svg");
  });

  test("check if buttons are rendered properly on load", () => {
    /* setup */
    renderWithProvider(<ControlsComponent />);

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
