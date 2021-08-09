import { lazy, React, Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";

const Button = styled.button`
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => getColor(props.iconColor)};
  cursor: pointer;
  white-space: nowrap;
`;

const Label = styled.label`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding-left: 4px;
`;

const getIcon = (iconName) =>
  lazy(() => import(`../_starter/shared/Icons/${iconName}.js`));

export const IconButton = ({
  children,
  icon,
  iconColor,
  iconHeight,
  iconWidth,
  label,
  onClick,
}) => {
  const [iconView, setIconView] = useState([]);

  useEffect(() => {
    const IconView = getIcon(icon);

    setIconView([
      <IconView key={icon} height={iconHeight} width={iconWidth} />,
    ]);
  }, [icon, iconHeight, iconWidth]);
  return (
    <Suspense fallback="...">
      <Button iconColor={iconColor} onClick={onClick}>
        {iconView}
        {label && <Label>{label}</Label>}
      </Button>
    </Suspense>
  );
};

IconButton.defaultProps = {
  iconColor: "black",
  iconHeight: "1em",
  iconWidth: "1em",
};

IconButton.propTypes = {
  // name of icon; must match file name of icon in shared folder
  icon: PropTypes.string.isRequired,
  // color of icon; must match color defined in theme
  iconColor: PropTypes.string,
  // height of icon expressed as valid css value (ie. 1em, 20px, etc.)
  iconHeight: PropTypes.string,
  // width of icon expressed as valid css value (ie. 1em, 20px, etc.)
  iconWidth: PropTypes.string,
  // optional label for button
  label: PropTypes.string,
};
