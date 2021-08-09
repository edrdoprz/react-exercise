import { React } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ActivityListItem } from "./ActivityListItem";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const ActivityList = ({ activities, children, className }) => {
  return (
    <List className={className}>
      {activities.map((activity) => (
        <ActivityListItem activity={activity} />
      ))}
    </List>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.array.isRequired,
};
