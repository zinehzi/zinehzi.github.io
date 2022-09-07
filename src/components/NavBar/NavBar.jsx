import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = ({className=""}) => {
  return (
    <ul className={`navbar-nav gap-3 ${className}`}>
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className="nav-link">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
