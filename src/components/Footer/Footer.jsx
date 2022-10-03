import React from "react";
import "./Footer.scss";
import NavBar from "../NavBar/NavBar";
import SocialMedia from "../SocialMedia/SocialMedia";
import Icons from "../Icons/Icons";

const Footer = () => {
  return (
    <footer dir="ltr" className="d-flex flex-column">
      <div
        className="fixed-bottom d-none d-md-flex flex-column align-items-center gap-2"
        style={{ right: "initial", left: "40px" }}
      >
        <SocialMedia />
        <div className="d-flex flex-column gap-1">
          <div className="dot"></div>
          <div className="vr"></div>
        </div>
      </div>
      <a className="align-self-center" href="#">
        <Icons name="Btt" />
      </a>
      <nav
        className="navbar navbar-expand-md bg-light border-top px-3"
        style={{ zIndex: "1040" }}
      >
        <div className="container-fluid">
          <span className="navbar-text" style={{ fontSize: "16px" }}>
            &copy; 2022 Zineh Ziaraty
          </span>
          <NavBar className="d-none d-md-flex" />
          <SocialMedia className="d-md-none flex-row gap-3" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
