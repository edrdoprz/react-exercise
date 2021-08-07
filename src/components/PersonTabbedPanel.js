import { React, useState } from "react";
import styled from "styled-components";
import { PersonActivityTab } from "./PersonActivityTab";
import { PersonRemindersTab } from "./PersonRemindersTab";
import { PersonTrackingTab } from "./PersonTrackingTab";

import { TabbedPanel } from "./TabbedPanel";

const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
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
        <TabsContainer>
          {currentTab.id === TABS[0].id && <PersonActivityTab />}
          {currentTab.id === TABS[1].id && <PersonTrackingTab />}
          {currentTab.id === TABS[2].id && <PersonRemindersTab />}
        </TabsContainer>
      </TabbedPanel>
    </Container>
  );
};
