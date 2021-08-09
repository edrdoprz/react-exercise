import { React } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ActivityListItem } from "./ActivityListItem";
import { getColor } from "../_starter/theme/theme";
import SvgEye from "../_starter/shared/Icons/Eye";
import SvgClick from "../_starter/shared/Icons/Click";
import SvgReply from "../_starter/shared/Icons/Reply";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  .activity-list-item {
    margin-bottom: 8px;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDetailsHeader = styled.div`
  display: flex;
  font-size: 14px;
  flex-flow: wrap;
  gap: 4px;
`;

const ItemDetailsSubheader = styled.div`
  display: flex;
  font-size: 12px;
`;

const ItemDetailsSubheaderText = styled.span`
  color: ${getColor("grey")};
`;

const Title = styled.span`
  font-weight: 600;
  color: ${getColor("greyDark")};
  white-space: nowrap;
`;

const BlueTitle = styled.span`
  font-weight: 600;
  color: #417caa;
  white-space: nowrap;
`;

const TitleDetails = styled.span`
  font-weight: 400;
  color: ${getColor("greyDark")};
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  color: #7B7F87;
  margin-left: 4px;

  span {
    margin-left: 2px;
    margin-right: 10px;
  }
`;

export const ActivityList = ({ activities, children, className }) => {
  return (
    <List className={className}>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} className="activity-list-item" activity={activity}>
          <ItemDetails>
            {activity.type === "voicemail" && (
              <>
                <ItemDetailsHeader>
                  <Title>Voicemail Received</Title>
                  <TitleDetails>
                    {new Date(activity.dynamic_data.voicemail_duration * 1000)
                      .toISOString()
                      .substr(15, 4)}
                  </TitleDetails>
                </ItemDetailsHeader>
                <ItemDetailsSubheader>
                  <ItemDetailsSubheaderText>
                    {activity.dynamic_data.user_name}
                  </ItemDetailsSubheaderText>
                </ItemDetailsSubheader>
              </>
            )}
            {activity.type === "success" && (
              <>
                <ItemDetailsHeader>
                  <Title>Marked as Success</Title>
                </ItemDetailsHeader>
                <ItemDetailsSubheader>
                  <ItemDetailsSubheaderText>
                    {activity.dynamic_data.user_name}
                  </ItemDetailsSubheaderText>
                </ItemDetailsSubheader>
              </>
            )}
            {activity.type === "sent_email" && (
              <>
                <ItemDetailsHeader>
                  <BlueTitle>{activity.static_data.subject}</BlueTitle>
                </ItemDetailsHeader>
                <ItemDetailsSubheader>
                  <ItemDetailsSubheaderText>
                    {`${activity.dynamic_data.user_name} |`}
                  </ItemDetailsSubheaderText>
                  <CountContainer>
                    <SvgEye />
                    <span>{activity.dynamic_data.counts.views}</span>
                    <SvgClick />
                    <span>{activity.dynamic_data.counts.clicks}</span>
                    <SvgReply />
                    <span>{activity.dynamic_data.counts.replies}</span>
                  </CountContainer>
                </ItemDetailsSubheader>
              </>
            )}
            {activity.type === "call" && (
              <>
                <ItemDetailsHeader>
                  <Title>{activity.static_data.sentiment}</Title>
                </ItemDetailsHeader>
                <ItemDetailsSubheader>
                  <ItemDetailsSubheaderText>
                    {`${activity.dynamic_data.user_name} with ${activity.dynamic_data.phone_number}`}
                  </ItemDetailsSubheaderText>
                </ItemDetailsSubheader>
              </>
            )}
            {activity.type === "email_reply" && (
              <>
                <ItemDetailsHeader>
                  <BlueTitle>{`RE: ${activity.static_data.in_reply_to_subject}`}</BlueTitle>
                  <TitleDetails>{activity.static_data.body}</TitleDetails>
                </ItemDetailsHeader>
                <ItemDetailsSubheader>
                  <ItemDetailsSubheaderText>
                    {`${activity.dynamic_data.user_name} |`}
                  </ItemDetailsSubheaderText>
                  <CountContainer>
                    <SvgEye />
                    <span>{activity.dynamic_data.counts.views}</span>
                    <SvgClick />
                    <span>{activity.dynamic_data.counts.clicks}</span>
                    <SvgReply />
                    <span>{activity.dynamic_data.counts.replies}</span>
                  </CountContainer>
                </ItemDetailsSubheader>
              </>
            )}
            {activity.type === "added_to_cadence" && (
              <>
                <ItemDetailsHeader>
                  <Title>Added to Cadence</Title>
                  <BlueTitle>{activity.dynamic_data.cadence_name}</BlueTitle>
                </ItemDetailsHeader>
                <ItemDetailsSubheader>
                  <ItemDetailsSubheaderText>
                    {`Added by ${activity.static_data.instigator.action_caller_name} | Assigned to ${activity.dynamic_data.user_name}`}
                  </ItemDetailsSubheaderText>
                </ItemDetailsSubheader>
              </>
            )}
          </ItemDetails>
        </ActivityListItem>
      ))}
    </List>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.array.isRequired,
};
