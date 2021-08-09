import { React } from "react";
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";

const Container = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid ${getColor("greyLightest")};
  flex-direction: column;
`;

export const Panel = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};
