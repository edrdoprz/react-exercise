import { React, useEffect, useState } from "react";
import styled from "styled-components";

import { getBreakpoint, getColor } from "./_starter/theme/theme";
import { LeftColumn } from "./components/LeftColumn";
import { RightColumn } from "./components/RightColumn";
import { PersonTabbedPanel } from "./components/PersonTabbedPanel";
import { PersonContext } from "./contexts/person";

const Subheader = styled.div`
  background-color: white;
  box-shadow: inset 0px -1px 0px ${getColor("greyLightest")};
  display: flex;
  font-size: 20px;
  font-weight: 500;
  padding: 11px 18px;
`;
const ColumnsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
  gap: 8px;

  @media screen and (max-width: ${getBreakpoint('md')}) {
    .right-column {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const App = () => {
  const [person, setPerson] = useState({
    details: {},
    activities: [],
    upcomingActivities: [],
  });

  useEffect(() => {
    fetch("https://ui-offline-exercise.s3.amazonaws.com/data/people.json")
      .then((res) => res.json())
      .then(({ activities, upcoming_activities, ...details }) => {
        setPerson((prev) => ({
          ...prev,
          details: {
            ...details,
            twitter_url: details.twitter_handle
              ? `https://twitter.com/${details.twitter_handle}`
              : null,
          },
        }));

        return Promise.all([
          fetch(activities._href)
            .then((res) => res.json())
            .then((res) => res?.data),
          fetch(upcoming_activities._href)
            .then((res) => res.json())
            .then((res) => res?.data),
        ]);
      })
      .then(([activities, upcomingActivities]) => {
        setPerson((prev) => ({ ...prev, activities, upcomingActivities }));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PersonContext.Provider value={person}>
      <Subheader>People</Subheader>
      <ColumnsContainer>
        <LeftColumn />

        <PersonTabbedPanel />

        <RightColumn />
      </ColumnsContainer>
    </PersonContext.Provider>
  );
};
