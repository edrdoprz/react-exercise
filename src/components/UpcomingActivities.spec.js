import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { UpcomingActivities } from "./UpcomingActivities";
// eslint-disable-next-line no-unused-vars
import { usePersonContext } from "../contexts/person";

jest.mock("../contexts/person", () => {
  return {
    usePersonContext: () => ({ upcomingActivities: [] }),
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

it("renders with empty message when upcomingActivities is empty", () => {
  act(() => {
    render(<UpcomingActivities />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-crrsfI dYoheA\\">
      <h2 class=\\"sc-dQppl fXeRil\\">Upcoming Activities</h2><span class=\\"sc-bqyKva evzfeu\\">Once actions are scheduled, they’ll appear here</span>
    </div>"
  `);
});
