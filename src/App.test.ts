import { render } from "@testing-library/svelte";
import App from "./App.svelte";

test("should render", () => {
  const { getByText } = render(App);

  expect(getByText('Hello world!')).toBeInTheDocument()
});