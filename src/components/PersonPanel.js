import { React } from "react";
import styled from "styled-components";

import { IconButton } from "./IconButton";
import { Panel } from "./Panel";
import { PanelHeading } from "./PanelHeading";
import { PersonPanelDetails } from "./PersonPanelDetails";

const StyledPanelHeading = styled(PanelHeading)`
  padding: 8px 15px;
  justify-content: space-between;
  align-items: center;
`;

export const PersonPanel = () => {
  return (
    <Panel>
      <StyledPanelHeading>
        <IconButton
          icon="StarOutlined"
          iconColor="orange"
          iconHeight="17px"
          iconWidth="17px"
          onClick={() => console.log("star clicked")}
        />
        <IconButton
          icon="EllipsisHorizontal"
          iconHeight="17px"
          iconWidth="17px"
        />
      </StyledPanelHeading>

      <PersonPanelDetails />
    </Panel>
  );
};
