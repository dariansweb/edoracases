import React from "react";
import PropTypes from "prop-types";
import "./styles/Button.styles.css";

const Button = ({
  type = "button",
  label,
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      className={`btn-${variant}`} // Apply the class based on the variant prop
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([
    "primary",
    "primary-b",
    "secondary",
    "secondary-b",
    "tertiary",
    "tertiary-b",
  ]), 
};

export default Button;
