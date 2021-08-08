import { React } from "react";
import styled from "styled-components";
import { PersonActivityActions } from "./PersonActivityActions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonActivityTab = ({ children }) => {
  return (
    <Container>
      <PersonActivityActions />
    </Container>
  );
};
