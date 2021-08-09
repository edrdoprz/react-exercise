import { React } from "react";
import styled from "styled-components";

import { usePersonContext } from "../contexts/person";
import { getColor } from "../_starter/theme/theme";
import { ActivityList } from "./ActivityList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${getColor('greyDark')}
`;

const Heading = styled.h2`
  display: flex;
  font-size: 18px;
  font-weight: 400;
`;

const EmptyMessage = styled.span`
  font-size: 14px;
  text-align: center;
  line-height: 18px;
`;

export const UpcomingActivities = ({ className }) => {
  const { upcomingActivities } = usePersonContext();

  return (
    <Container className={className}>
      <Heading>Upcoming Activities</Heading>
      {upcomingActivities.length === 0 && (
        <EmptyMessage>
          Once actions are scheduled, they’ll appear here
        </EmptyMessage>
      )}
      {upcomingActivities.length > 0 && (
        <ActivityList activities={upcomingActivities} />
      )}
    </Container>
  );
};
