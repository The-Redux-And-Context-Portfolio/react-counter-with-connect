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

/* module */
function renderWithProvider(ui: React.ReactElement, props: ModuleProps) {
  const { preloadedState } = props;
  const store = createReduxStore(preloadedState);

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
