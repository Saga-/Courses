/*
 * @jest-environment jsdom
 * */

import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import { createRenderer } from "react-test-renderer/shallow";
import Results from "../Results";

test("renders correctly with no pets", () => {
  const tree = create(<Results pets={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correct");
