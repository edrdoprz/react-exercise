import { React } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Panel } from "./Panel";
import { PanelHeading } from "./PanelHeading";
import { getColor } from "../_starter/theme/theme";

const Button = styled.button`
  appearance: none;
  display: flex;
  padding: 12px 0;
  border: none;
  border-bottom: ${(props) =>
    props.isCurrentTab ? `3px solid ${getColor("blueLight")}` : "none"};
  background: none;
  color: ${getColor("greyDarkest")};
  cursor: pointer;
  font-weight: ${(props) => (props.isCurrentTab ? "600" : "400")};
`;

const StyledPanelHeading = styled(PanelHeading)`
  padding: 0 16px;
  gap: 24px;
`;

export const TabbedPanel = ({ children, currentTab, tabs, onTabClick }) => {
  return (
    <Panel className="tabbed-panel">
      <StyledPanelHeading>
        {tabs.map((tab) => (
          <Button key={tab.id} isCurrentTab={tab.id === currentTab.id} onClick={() => onTabClick(tab)}>
            {tab.label}
          </Button>
        ))}
      </StyledPanelHeading>
      {children}
    </Panel>
  );
};

TabbedPanel.propTypes = {
  // object that represents current tab
  currentTab: PropTypes.object.isRequired,
  // array of tabs with an id and label
  tabs: PropTypes.array.isRequired,
};
