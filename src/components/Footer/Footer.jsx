import React from "react";
import "./Footer.scss";
import NavBar from "../NavBar/NavBar";
const Footer = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-bottom bg-light border-top ">
      <div className="container">
        <span className="navbar-text">&copy; 2022 Zineh Ziaraty</span>
        <a href="#" className="Btt-Icon position-absolute start-50 "></a>
        <NavBar className="d-none d-md-flex" />
      </div>
    </nav>
  );
};

export default Footer;
