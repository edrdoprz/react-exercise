import { React } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SvgVoicemail from "../_starter/shared/Icons/Voicemail";
import SvgBadge from "../_starter/shared/Icons/Badge";
import SvgPaperPlane from "../_starter/shared/Icons/PaperPlane";
import SvgPhone from "../_starter/shared/Icons/Phone";
import SvgReply from "../_starter/shared/Icons/Reply";
import SvgRocket from "../_starter/shared/Icons/Rocket";
import { getColor } from "../_starter/theme/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.iconColor};
  border-radius: 100%;
  width: 32px;
  height: 32px;
`;

export const ActivityListItemIcon = ({ activity, className }) => {
  let iconColor = "#2A409C";
  let bgColor = "#EDEEFA";

  if (activity.type === "voicemail" || activity.type === "call") {
    iconColor = getColor("teal");
    bgColor = "#E7F8F8";
  } else if (activity.type === "added_to_cadence") {
    iconColor = "#569BCD";
    bgColor = "#F0F9FE";
  }

  return (
    <Container className={className} iconColor={iconColor} bgColor={bgColor}>
      {activity.type === "voicemail" && <SvgVoicemail />}
      {activity.type === "success" && <SvgBadge />}
      {activity.type === "sent_email" && <SvgPaperPlane />}
      {activity.type === "call" && <SvgPhone />}
      {activity.type === "email_reply" && <SvgReply />}
      {activity.type === "added_to_cadence" && <SvgRocket />}
    </Container>
  );
};

ActivityListItemIcon.propTypes = {
  activity: PropTypes.object.isRequired,
};
