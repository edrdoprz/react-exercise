import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { PastActivities } from "./PastActivities";
// eslint-disable-next-line no-unused-vars
import { usePersonContext } from "../contexts/person";

jest.mock("../contexts/person", () => {
  return {
    usePersonContext: () => ({ activities: [] }),
  };
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with empty message when activities is empty", () => {
  act(() => {
    render(<PastActivities />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-crrsfI dYoheA\\">
      <h2 class=\\"sc-dQppl fXeRil\\">Past Activities</h2><span class=\\"sc-bqyKva evzfeu\\">Actions that have been completed will appear here</span>
    </div>"
  `);
});
