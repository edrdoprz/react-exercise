import { React } from "react";
import PropTypes from "prop-types";

import { Panel } from "./Panel";
import { PanelHeading } from "./PanelHeading";

export const TabbedPanel = ({ children, tabs }) => {
  return (
    <Panel className="tabbed-panel">
      <PanelHeading>
        {tabs.map((tab) => (
          <button key={tab.id}>{tab.label}</button>
        ))}
      </PanelHeading>
      {children}
    </Panel>
  );
};

TabbedPanel.propTypes = {
  // array of tabs with an id and label
  tabs: PropTypes.array.isRequired,
};
