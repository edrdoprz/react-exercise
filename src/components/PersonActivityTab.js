import { React } from "react";
import styled from "styled-components";
import { PastActivities } from "./PastActivities";
import { PersonActivityActions } from "./PersonActivityActions";
import { UpcomingActivities } from "./UpcomingActivities";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonActivityTab = () => {
  return (
    <Container>
      <PersonActivityActions />
      <UpcomingActivities />
      <PastActivities />
    </Container>
  );
};
