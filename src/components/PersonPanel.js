import { React } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";
import { IconButton } from "./IconButton";
import { Panel } from "./Panel";
import { PanelHeading } from "./PanelHeading";

const StyledPanelHeading = styled(PanelHeading)`
  padding: 8px 15px;
  justify-content: space-between;
  align-items: center;
`;

export const PersonPanel = ({ children }) => {
  return (
    <Panel>
      <StyledPanelHeading>
        <IconButton icon="StarOutlined" iconColor="orange" iconHeight="17px" iconWidth="17px" onClick={() => console.log('star clicked')} />
        <IconButton icon="EllipsisHorizontal" iconHeight="17px" iconWidth="17px" />
      </StyledPanelHeading>
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
