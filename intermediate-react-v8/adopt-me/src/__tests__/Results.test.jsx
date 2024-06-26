import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Results from "../Results";

test("renders correctly with no pets", async () => {
  const { asFragment } = render(<Results pets={[]} />);
  expect(asFragment()).toMatchSnapshot();
});