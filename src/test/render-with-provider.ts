/* node modules */
import { render, RenderOptions } from '@testing-library/react';

/* app imports */
import ProviderWrapper from "./provider-wrapper";

/* module */
function renderWithProvider(
  ui: JSX.Element,
  options?: RenderOptions
) {
  return render(ui, { wrapper: ProviderWrapper, ...options });
}

/* exports */
export default renderWithProvider;
