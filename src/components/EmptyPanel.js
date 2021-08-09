import { React } from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";

const Container = styled.div`
  display: flex;
  background-color: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  min-height: ${props => props.minHeight}px;
`;

export const EmptyPanel = ({ minHeight }) => {
  return (
    <Container className="empty-panel" minHeight={minHeight} />
  );
};

EmptyPanel.defaultProps = {
  minHeight: 100,
}

EmptyPanel.propTypes = {
  minHeight: PropTypes.number,
}
