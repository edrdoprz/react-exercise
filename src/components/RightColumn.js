import { React } from "react";
import styled from "styled-components";

import { EmptyPanel } from "./EmptyPanel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.1;
  gap: 8px;
`;

export const RightColumn = ({ children }) => {
  return (
    <Container>
      <EmptyPanel minHeight={226} />
      <EmptyPanel minHeight={428} />
      <EmptyPanel minHeight={194} />
      <EmptyPanel minHeight={213} />
    </Container>
  );
};
