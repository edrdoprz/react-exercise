import { React } from "react";
import styled from "styled-components";

import { App } from "../App";
import { LeftNav } from "./Navigation/LeftNav/LeftNav";
import { TopNav } from "./Navigation/TopNav/TopNav";
import { getColor } from "./theme/theme";

const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  background-color: ${getColor('bgGrey')};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const AppShell = ({ children }) => {
  return (
    <>
      <TopNav />
      <Layout>
        <LeftNav />
        <Container>
          <App />
        </Container>
      </Layout>
    </>
  );
};
