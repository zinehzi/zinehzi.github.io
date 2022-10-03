import React from "react";

const Main = ({ children, className = "" }) => {
  return <main className={`container ${className}`}>{children}</main>;
};

export default Main;
