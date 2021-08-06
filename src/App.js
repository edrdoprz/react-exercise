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

export const App = ({ children }) => {
  return (
    <>
      <Subheader>People</Subheader>
    </>
  );
};
