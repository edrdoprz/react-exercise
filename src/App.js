import { React } from "react";
import styled from "styled-components";

const Subheader = styled.div`
  background-color: white;
  box-shadow: inset 0px -1px 0px #e5e5e5;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  padding: 11px 18px;
  width: 100%;
  align-items: center;
`;
const ColumnsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
  gap: 8px;
`;
const LeftColumn = styled.div`
  display: flex;
  background-color: white;
  flex: 0.9;
`;
const RightColumn = styled.div`
  display: flex;
  background-color: white;
  flex: 1.1;
`;
const PersonTabs = styled.div`
  display: flex;
  background-color: white;
  flex: 2;
`;

export const App = ({ children }) => {
  return (
    <>
      <Subheader>People</Subheader>
      <ColumnsContainer>
        <LeftColumn></LeftColumn>

        <PersonTabs></PersonTabs>

        <RightColumn></RightColumn>
      </ColumnsContainer>
    </>
  );
};
