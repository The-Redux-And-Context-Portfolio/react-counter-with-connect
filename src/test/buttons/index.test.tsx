/* node modules */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

/* app imports */
import ButtonsComponent from "../../components/buttons/index";
import reduxStore from "../../redux-store/store";
import renderWithProvider from "../render-with-provider";
import {
  counterDecrement, counterIncrement
} from "../../redux-store/actions/counter";


/* t-suite */
describe("ButtonsComponent Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("check if 'decrement' action.type is sent on click", async () => {
    /* setup */
    const user = userEvent.setup();
    const spyDispatch = jest.spyOn(reduxStore, "dispatch");
    renderWithProvider(<ButtonsComponent />);

    /* element + event */
    const decBtn = screen.getByTestId("decBtn");
    await user.click(decBtn);

    /* assertions */
    expect(spyDispatch).toHaveBeenCalledWith(counterDecrement());
  });

  test("check if 'increment' action.type is sent on click", async () => {
    /* setup */
    const user = userEvent.setup();
    const spyDispatch = jest.spyOn(reduxStore, "dispatch");
    renderWithProvider(<ButtonsComponent />);

    /* element + event */
    const incBtn = screen.getByTestId("incBtn");
    await user.click(incBtn);

    /* assertions */
    expect(spyDispatch).toHaveBeenCalledWith(counterIncrement());
  });

  test("check if button icons render properly on load", () => {
    /* setup */
    renderWithProvider(<ButtonsComponent />);

    /* element(s) */
    const incIcon = screen.getByTitle("Increment");
    const decIcon = screen.getByTitle("Decrement");

    /* assertions */
    expect(incIcon).toHaveAttribute("src", "plus-icon-ffffff.svg");
    expect(decIcon).toHaveAttribute("src", "minus-icon-ffffff.svg")
  });

  test("check if buttons render properly on load", () => {
    /* setup */
    renderWithProvider(<ButtonsComponent />);

    /* element(s) */
    const incBtn = screen.getByTestId("incBtn");
    const decBtn = screen.getByTestId("decBtn");

    /* assertions - since they are similar expect functionality, group them */
    const buttonsArray = [incBtn, decBtn];
    buttonsArray.forEach((buttonElem) => {
      expect(buttonElem).toBeInTheDocument();
      expect(buttonElem).toHaveAttribute("type", "button");
      expect(buttonElem).not.toBeDisabled();
    });
  });
});
