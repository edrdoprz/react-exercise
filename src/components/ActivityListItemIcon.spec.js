import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { ADDED_TO_CADENCE, CALL, EMAIL_REPLY, SENT_EMAIL, SUCCESS, VOICEMAIL } from "../testsData";
import { ActivityListItemIcon } from "./ActivityListItemIcon";

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

it("renders voicemail icon", () => {
  act(() => {
    render(<ActivityListItemIcon activity={VOICEMAIL} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdfBwQ ckMRFM\\"><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\">
        <defs>
          <path d=\\"M11.787 4.963a3.1 3.1 0 011.251.253c.387.168.727.396 1.019.683A3.171 3.171 0 0115 8.162a3.1 3.1 0 01-.253 1.251 3.274 3.274 0 01-1.709 1.71 3.1 3.1 0 01-1.25.252H4.212a3.1 3.1 0 01-1.251-.253 3.274 3.274 0 01-1.71-1.709A3.1 3.1 0 011 8.163 3.171 3.171 0 011.943 5.9a3.334 3.334 0 011.019-.684 3.1 3.1 0 011.25-.253 3.228 3.228 0 012.263.937 3.228 3.228 0 01.746 3.37 3.32 3.32 0 01-.534.943h2.625a3.32 3.32 0 01-.533-.943 3.178 3.178 0 01-.191-1.108A3.228 3.228 0 019.525 5.9a3.228 3.228 0 012.262-.936zm-7.574 5.25c.556 0 1.034-.2 1.435-.602.401-.4.602-.884.602-1.449 0-.556-.2-1.034-.602-1.435a1.96 1.96 0 00-1.435-.602c-.565 0-1.048.2-1.45.602a1.96 1.96 0 00-.6 1.435c0 .565.2 1.048.6 1.45.402.4.885.6 1.45.6zm7.574 0c.565 0 1.048-.2 1.45-.602.4-.4.6-.884.6-1.449 0-.556-.2-1.034-.6-1.435a1.975 1.975 0 00-1.45-.602c-.556 0-1.034.2-1.435.602a1.96 1.96 0 00-.602 1.435c0 .565.2 1.048.602 1.45.4.4.88.6 1.435.6z\\" id=\\"voicemail_svg__a\\"></path>
        </defs>
        <g fill=\\"none\\" fill-rule=\\"evenodd\\">
          <mask id=\\"voicemail_svg__b\\" fill=\\"#fff\\">
            <use xlink:href=\\"#voicemail_svg__a\\"></use>
          </mask>
          <use fill=\\"currentColor\\" xlink:href=\\"#voicemail_svg__a\\"></use>
          <g mask=\\"url(#voicemail_svg__b)\\" fill=\\"currentColor\\" fill-rule=\\"nonzero\\">
            <rect width=\\"24\\" height=\\"24\\" rx=\\"2\\"></rect>
          </g>
        </g>
      </svg></div>"
  `);
});

it("renders success icon", () => {
  act(() => {
    render(<ActivityListItemIcon activity={SUCCESS} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdfBwQ jxiRQr\\"><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\">
        <defs>
          <path d=\\"M4.007 9.01A5 5 0 1112 9l1 5-2.131-.492L9.002 15l-.997-3.993L7 15l-1.88-1.492L3 14l1.007-4.99zM8 10a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6z\\" id=\\"badge_svg__a\\"></path>
        </defs>
        <use fill=\\"currentColor\\" xlink:href=\\"#badge_svg__a\\" fill-rule=\\"evenodd\\"></use>
      </svg></div>"
  `);
});

it("renders sent_email icon", () => {
  act(() => {
    render(<ActivityListItemIcon activity={SENT_EMAIL} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdfBwQ jxiRQr\\"><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\">
        <defs>
          <path d=\\"M14.884 1.04a.27.27 0 00-.286 0L1.135 8.85a.27.27 0 00.038.485l3.93 1.572 1.573 3.93.049.06c.016.022 0 .032 0 .043a.27.27 0 00.2.06h.031a.264.264 0 00.124-.06l2.434-2.692 3.517 1.136h.08a.27.27 0 00.27-.232l1.616-11.846a.27.27 0 00-.113-.264zm-2.5 2.952l-5.201 7.102a.264.264 0 00-.038.087l-.334 2.466-1.169-2.924 6.743-6.731z\\" id=\\"paper-plane_svg__a\\"></path>
        </defs>
        <g fill=\\"none\\" fill-rule=\\"evenodd\\">
          <mask id=\\"paper-plane_svg__b\\" fill=\\"#fff\\">
            <use xlink:href=\\"#paper-plane_svg__a\\"></use>
          </mask>
          <use fill=\\"currentColor\\" fill-rule=\\"nonzero\\" xlink:href=\\"#paper-plane_svg__a\\"></use>
          <g mask=\\"url(#paper-plane_svg__b)\\" fill=\\"currentColor\\" fill-rule=\\"nonzero\\">
            <rect width=\\"24\\" height=\\"24\\" rx=\\"2\\"></rect>
          </g>
        </g>
      </svg></div>"
  `);
});

it("renders call icon", () => {
  act(() => {
    render(<ActivityListItemIcon activity={CALL} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdfBwQ ckMRFM\\"><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\">
        <defs>
          <path d=\\"M13.202 10.439a7.53 7.53 0 01-2.365-.376 1.083 1.083 0 00-1.054.221L8.31 11.412a8.238 8.238 0 01-3.684-3.685l1.09-1.473c.284-.284.386-.701.266-1.083a7.538 7.538 0 01-.376-2.366A1.068 1.068 0 004.5 1.737H2.061A1.068 1.068 0 001 2.797C1.004 9.536 6.465 14.997 13.202 15a1.068 1.068 0 001.061-1.061v-2.432c0-.587-.474-1.064-1.06-1.068z\\" id=\\"phone_svg__a\\"></path>
        </defs>
        <g fill=\\"none\\" fill-rule=\\"evenodd\\">
          <mask id=\\"phone_svg__b\\" fill=\\"#fff\\">
            <use xlink:href=\\"#phone_svg__a\\"></use>
          </mask>
          <use fill=\\"currentColor\\" fill-rule=\\"nonzero\\" xlink:href=\\"#phone_svg__a\\"></use>
          <g mask=\\"url(#phone_svg__b)\\" fill=\\"currentColor\\" fill-rule=\\"nonzero\\">
            <rect width=\\"24\\" height=\\"24\\" rx=\\"2\\"></rect>
          </g>
        </g>
      </svg></div>"
  `);
});

it("renders email_reply icon", () => {
  act(() => {
    render(<ActivityListItemIcon activity={EMAIL_REPLY} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdfBwQ jxiRQr\\"><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\">
        <defs>
          <path d=\\"M7.815 5.651h-.04V3.903a.903.903 0 00-1.482-.69L1.777 7.276a.903.903 0 000 1.39l4.516 4.065a.903.903 0 00.578.203.903.903 0 00.903-.903v-1.865h.154c3.59 0 6.62 1.138 6.62 2.488a.226.226 0 00.452 0 7.023 7.023 0 00-7.185-7.004z\\" id=\\"reply_svg__a\\"></path>
        </defs>
        <use fill=\\"currentColor\\" fill-rule=\\"nonzero\\" xlink:href=\\"#reply_svg__a\\"></use>
      </svg></div>"
  `);
});

it("renders added_to_cadence icon", () => {
  act(() => {
    render(<ActivityListItemIcon activity={ADDED_TO_CADENCE} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdfBwQ fptuPJ\\"><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 16 16\\">
        <defs>
          <path d=\\"M5.609 6.179A22.088 22.088 0 017.59 3.865c2.636-2.636 6.136-3.41 7.045-2.5.91.909.136 4.41-2.5 7.045-.64.64-1.464 1.347-2.313 1.982A3.858 3.858 0 019.181 15L1 6.819a3.858 3.858 0 014.609-.64zm-3.788 8c-.236-.235.46-2.455.909-2.903.037-.038.116-.07.235-.081.395-.037.946.176 1.305.535.503.504.668 1.327.454 1.54-.448.448-2.668 1.145-2.903.91zm7.815-7.815a1.286 1.286 0 101.818-1.818 1.286 1.286 0 00-1.818 1.818z\\" id=\\"rocket_svg__a\\"></path>
        </defs>
        <g fill=\\"none\\" fill-rule=\\"evenodd\\">
          <mask id=\\"rocket_svg__b\\" fill=\\"#fff\\">
            <use xlink:href=\\"#rocket_svg__a\\"></use>
          </mask>
          <use fill=\\"currentColor\\" fill-rule=\\"nonzero\\" xlink:href=\\"#rocket_svg__a\\"></use>
          <g mask=\\"url(#rocket_svg__b)\\" fill=\\"currentColor\\" fill-rule=\\"nonzero\\">
            <rect width=\\"24\\" height=\\"24\\" rx=\\"2\\"></rect>
          </g>
        </g>
      </svg></div>"
  `);
});
