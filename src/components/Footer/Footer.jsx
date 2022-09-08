import React from "react";
import "./Footer.scss";
import NavBar from "../NavBar/NavBar";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="fixed-bottom ">
      <div className="container d-flex flex-column gap-2">
        <SocialMedia />
        <div className="d-flex flex-column gap-1" style={{marginLeft: "22px"}}>
          <div className="dot"></div>
          <div className="vr"></div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md bg-light border-top ">
        <div className="container">
          <span className="navbar-text">&copy; 2022 Zineh Ziaraty</span>
          <a href="#" className="Btt-Icon position-absolute start-50 "></a>
          <NavBar className="d-none d-md-flex" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
