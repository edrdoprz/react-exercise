import { React } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { format } from "date-fns";

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
  padding: 12px 16px;
  border: 1px solid ${getColor('greyLightest')};
  flex: 1;
  gap: 12px;
`

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 600;
  font-size: 12px;
  color: ${getColor('grey')};
  text-align: end;
  white-space: nowrap;

  span:first-child {
    margin-bottom: 5px;
  }
`

export const ActivityListItem = ({ activity, children, className }) => {
  const date = new Date(activity.created_at)

  return (
    <ListItem className={className}>
      <ActivityListItemIcon activity={activity} />
      <DetailsContainer>
        {children}
        <TimeContainer>
          <span>{format(date, 'MMM d, yyyy')}</span>
          <span>{format(date, 'hh:mm aa')}</span>
        </TimeContainer>
      </DetailsContainer>
    </ListItem>
  );
};

ActivityListItem.propTypes = {
  activity: PropTypes.object.isRequired,
};
