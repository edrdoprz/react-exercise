import { React } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const PersonRemindersTab = () => {
  return (
    <Container>
      Reminders
    </Container>
  );
};
