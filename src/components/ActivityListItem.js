import { React } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ActivityListItemIcon } from "./ActivityListItemIcon";
import { getColor } from "../_starter/theme/theme";

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  padding: 16px;
  border: 1px solid ${getColor('greyLightest')};
  flex: 1;
`

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-weight: 600;
  font-size: 12px;

  span:first-child {
    margin-bottom: 5px;
  }
`

export const ActivityListItem = ({ activity, children, className }) => {
  return (
    <ListItem className={className}>
      <ActivityListItemIcon activity={activity} />
      <DetailsContainer>
        {children}
        <TimeContainer>
          <span>{activity.created_at}</span>
          <span>{activity.created_at}</span>
        </TimeContainer>
      </DetailsContainer>
    </ListItem>
  );
};

ActivityListItem.propTypes = {
  activity: PropTypes.object.isRequired,
};
