import React, { useState, useRef } from "react";
import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";

const Header = () => {
  const { i18n, tReady } = useTranslation();
  const [isToggleOn, setIsToggleOn] = useState(false);
  document.body.dir = i18n.dir();

  const handleCollapse = () => {
    var nav = document.getElementById("navbarNav");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };

  const handleClick = () => {
    if (isToggleOn) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("fa");
    }
    setIsToggleOn(!isToggleOn);
    document.body.dir = i18n.dir();
    handleCollapse();
  };

  return (
    <header
      className="fixed-top shadow-sm rounded"
      style={{ backgroundColor: "white" }}
      dir="ltr"
    >
      <nav className="navbar navbar-expand-md p-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand font-brand">
            <span>Z</span>
            <span
              className="vr position-absolute top-0"
              style={{ height: "58px", left: "50px" }}
            ></span>
          </Link>
          <button
            className="navbar-toggler"
            id="navbarBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <NavBar handleCollapse={handleCollapse} />
            <span
              className="lang d-block ms-md-4 mt-3 mt-md-0"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              {isToggleOn ? (
                <BsTranslate className="FA" fill="rgb(141,0,235)" title="EN" />
              ) : (
                <BsTranslate
                  className="EN"
                  fill="rgba(141,0,235,0.2)"
                  title="FA"
                />
              )}
            </span>
          </div>
          {/* <a href="MyResume.pdf" className="d-none d-md-block">
            <Button type="button" className="mybtn ms-3">
              Resume
            </Button>
          </a> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
