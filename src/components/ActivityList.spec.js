import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { ACTIVITIES } from "../testsData";
import { ActivityList } from "./ActivityList";

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

it("renders with empty activities", () => {
  act(() => {
    render(<ActivityList activities={[]} />, container);
  });
  expect(container.querySelectorAll('li').length).toBe(0);
});

it("renders with activities", () => {
  act(() => {
    render(<ActivityList activities={ACTIVITIES} />, container);
  });
  expect(container.querySelectorAll('li').length).toBe(ACTIVITIES.length);
});

it("renders voicemail layout", () => {
  act(() => {
    render(<ActivityList activities={[ACTIVITIES[0]]} />, container);
  });
  expect(container).toHaveTextContent('Voicemail Received')
});

it("renders success layout", () => {
  act(() => {
    render(<ActivityList activities={[ACTIVITIES[1]]} />, container);
  });
  expect(container).toHaveTextContent('Marked as Success')
});

it("renders sent_email layout", () => {
  act(() => {
    render(<ActivityList activities={[ACTIVITIES[2]]} />, container);
  });
  expect(container).toHaveTextContent(ACTIVITIES[2].static_data.subject)
});

it("renders call layout", () => {
  act(() => {
    render(<ActivityList activities={[ACTIVITIES[3]]} />, container);
  });
  expect(container).toHaveTextContent(ACTIVITIES[3].static_data.sentiment)
});

it("renders email_reply layout", () => {
  act(() => {
    render(<ActivityList activities={[ACTIVITIES[4]]} />, container);
  });
  expect(container).toHaveTextContent(ACTIVITIES[4].static_data.in_reply_to_subject)
});

it("renders added_to_cadence layout", () => {
  act(() => {
    render(<ActivityList activities={[ACTIVITIES[5]]} />, container);
  });
  expect(container).toHaveTextContent(ACTIVITIES[5].dynamic_data.cadence_name)
});
