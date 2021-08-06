import { React } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";
import { Panel } from "./Panel";
import { PanelHeading } from "./PanelHeading";

// const Container = styled.div`
//   display: flex;
//   background-color: white;
//   border: 1px solid ${getColor("greyLightest")};
//   flex-direction: column;
// `;

export const PersonPanel = ({ children }) => {
  return (
    <Panel>
      <PanelHeading>Person</PanelHeading>
      <div>Panel</div>
    </Panel>
  );
};

// Panel.defaultProps = {
//   minHeight: 100,
// };

// Panel.propTypes = {
//   minHeight: PropTypes.number,
// };
