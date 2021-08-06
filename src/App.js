import { React } from "react";
import styled from "styled-components";

import { getColor } from "./_starter/theme/theme";
import { LeftColumn } from "./components/LeftColumn";
import { RightColumn } from "./components/RightColumn";
import { PersonTabbedPanel } from "./components/PersonTabbedPanel";

const Subheader = styled.div`
  background-color: white;
  box-shadow: inset 0px -1px 0px ${getColor('greyLightest')};
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
`;

export const App = ({ children }) => {
  return (
    <>
      <Subheader>People</Subheader>
      <ColumnsContainer>
        <LeftColumn />

        <PersonTabbedPanel />

        <RightColumn />
      </ColumnsContainer>
    </>
  );
};
