import { React, useState } from "react";
import styled from "styled-components";

import { TabbedPanel } from "./TabbedPanel";

const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const TABS = [
  { id: "activity", label: "Activity" },
  { id: "tracking", label: "Tracking" },
  { id: "reminders", label: "Reminders" },
];

export const PersonTabbedPanel = () => {
  const [currentTab, setCurrentTab] = useState({ ...TABS[0] });

  return (
    <Container className="person-tabbed-panel">
      <TabbedPanel
        currentTab={currentTab}
        tabs={TABS}
        onTabClick={setCurrentTab}
      >
        Content
      </TabbedPanel>
    </Container>
  );
};
