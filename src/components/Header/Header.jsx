import React from "react";
import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top shadow-sm p-3 mb-5 rounded">
      <div className="container">
        <Link to="/" className="navbar-brand font-brand">
          Zi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <NavBar />
        </div>
        <Button className="font-button ms-3">Resume</Button>
      </div>
    </nav>
  );
};

export default Header;
