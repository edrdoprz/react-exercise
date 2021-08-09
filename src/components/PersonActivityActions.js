import { React } from "react";
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";
import { Dropdown } from "./Dropdown";
import { IconButton } from "./IconButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
  gap: 12px
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;

  .person-dropdown button {
    color: white;
    background-color: ${getColor("blue")};
    border-color: ${getColor("blue")};
  }
`;

const Separator = styled.span`
  background-color: ${getColor("greyLightest")};
  width: 1px;
  height: 28px;
  margin: 0 8px;
`;

const OtherActionsContainer = styled.div`
  display: flex;
  align-items: center;

  button:last-child {
    margin-left: 28px;
  }
`;

export const PersonActivityActions = () => {
  return (
    <Container>
      <DropdownContainer>
        <Dropdown className="person-dropdown" label="Person">
          <div>Update</div>
          <div>Delete</div>
        </Dropdown>

        <Separator />

        <Dropdown label="Activity">
          <div>Email</div>
          <div>Call</div>
          <div>Meet</div>
        </Dropdown>
      </DropdownContainer>

      <OtherActionsContainer>
        <IconButton
          icon="Phone"
          iconColor="blue"
          iconHeight="15px"
          iconWidth="15px"
          label="Log a Call"
        />
        <IconButton
          icon="Plus"
          iconColor="blue"
          iconHeight="10px"
          iconWidth="10px"
          label="Add a Note"
        />
      </OtherActionsContainer>
    </Container>
  );
};
