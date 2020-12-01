/*@flow*/
import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

//This js file aid in rendering different style of buttons throughout the site and css formatting.  - Hamilton Nguyen 10/19/2020
const STYLES = ["btn--primary", "btn--outline", "btn--dark", "btn--test"];
const SIZES = ["btn--medium", "btn--large", "btn--xl"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
