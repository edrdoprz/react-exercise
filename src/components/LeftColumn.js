import { React } from "react";
import styled from "styled-components";

import { EmptyPanel } from "./EmptyPanel";
import { PersonPanel } from "./PersonPanel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.9;
  gap: 8px;

  @media screen and (max-width: 800px) {
    flex: initial;

    .empty-panel {
      display: none;
    }
  }
`;

export const LeftColumn = () => {
  return (
    <Container className="left-column">
      <PersonPanel />
      <EmptyPanel minHeight={238} />
      <EmptyPanel minHeight={144} />
      <EmptyPanel minHeight={536} />
    </Container>
  );
};
