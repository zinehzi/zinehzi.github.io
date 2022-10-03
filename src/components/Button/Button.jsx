import React from "react";
import "./Button.scss";

const Button = ({
  children,
  type = "",
  className = "",
  style = {},
  handleClick,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-primary font ${className}`}
      style={style}
      onClick={handleClick}
      dir="ltr"
    >
      {children}
    </button>
  );
};

export default Button;
