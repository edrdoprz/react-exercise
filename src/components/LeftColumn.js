import { React } from "react";
import styled from "styled-components";

import { EmptyPanel } from "./EmptyPanel";
import { PersonPanel } from "./PersonPanel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.9;
  gap: 8px;
`;

export const LeftColumn = ({ children }) => {
  return (
    <Container>
      <PersonPanel />
      <EmptyPanel minHeight={238} />
      <EmptyPanel minHeight={144} />
      <EmptyPanel minHeight={536} />
    </Container>
  );
};
