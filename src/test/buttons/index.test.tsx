/* node modules */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

/* app imports */
import ButtonsComponent from "../../components/buttons/index";
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

  const mockPreloadedState = {
    counter: 0,
    sound: false
  };

  test("check if button icons render properly on load", () => {
    /* setup */
    renderWithProvider(<ButtonsComponent />, {
      preloadedState: mockPreloadedState
    });

    /* element(s) */
    const incIcon = screen.getByTitle("Increment");
    const decIcon = screen.getByTitle("Decrement");

    /* assertions */
    expect(incIcon).toHaveAttribute("src", "plus-icon-ffffff.svg");
    expect(decIcon).toHaveAttribute("src", "minus-icon-ffffff.svg")
  });

  test("check if buttons render properly on load", () => {
    /* setup */
    renderWithProvider(<ButtonsComponent />, {
      preloadedState: mockPreloadedState
    });

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
