/* node modules */
import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

/* app imports */
import reduxStore from "../redux-store/store";

/* interface */
interface FCProps extends PropsWithChildren {}

/* module */
function ProviderWrapper(props: FCProps): JSX.Element {
  const { children } = props;
  return (
    <Provider store={reduxStore}>
      { children }
    </Provider>
  )
}

export default ProviderWrapper;
