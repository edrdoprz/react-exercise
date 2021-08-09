import { React, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getColor } from "../_starter/theme/theme";
import ChevronSmDown from "../_starter/shared/Icons/ChevronSmDown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  appearance: none;
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 12px;
  background-color: white;
  border: 1px solid ${getColor("greyLight")};
  border-radius: 4px;
  color: ${getColor("greyDarkest")};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;

const Label = styled.label`
  cursor: pointer;
  padding-right: 5px;
`;

const Menu = styled.div`
  background-color: white;
  border: 1px solid ${getColor("greyLight")};
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  min-width: 100%;
`;

export const Dropdown = ({ children, className, label }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container className={className}>
      <Button onClick={() => setOpen(!isOpen)}>
        <Label>{label}</Label>
        <ChevronSmDown height="18px" width="18px" />
      </Button>

      {isOpen && <Menu>{children}</Menu>}
    </Container>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
};
