/* app imports */
import { render } from "@testing-library/react";
import { AppStore } from "../../src/redux-store/store";
import { AppReduxState } from "../redux-store/types";
import { Provider } from "react-redux";
import React, { PropsWithChildren } from "react";

/* app imports */
import createReduxStore from "../../src/redux-store/store";

/* interface */
interface ModuleProps {
  preloadedState: AppReduxState;
}

/**
 * modules helps create the actual store in the application and can also accept a preloadedState
 * props when being invoked.
 * @returns is similar to the render method from rtl
 */
function renderWithProvider(ui: React.ReactElement, props: ModuleProps) {
  const { preloadedState } = props;
  const store = createReduxStore(preloadedState);

  /**
   * the actual store wrapper, which accepts the children element argument
   */
  function ProviderWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        { children }
      </Provider>
    );
  }

  return {
    store,
    ...render(ui, {wrapper: ProviderWrapper})
  }
}

/* exports */
export default renderWithProvider;
