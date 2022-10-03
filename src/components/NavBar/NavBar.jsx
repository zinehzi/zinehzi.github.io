import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = ({ className = "", handleCollapse }) => {
  const { t } = useTranslation("Layout");

  return (
    <ul className={`navbar-nav gap-3 ${className}`}>
      <li className="nav-item">
        <Link
          to="/"
          className="nav-link"
          aria-current="page"
          onClick={handleCollapse}
        >
          {t("navbar-home")}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link" onClick={handleCollapse}>
          {t("navbar-about")}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className="nav-link" onClick={handleCollapse}>
          {t("navbar-portfolio")}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link" onClick={handleCollapse}>
          {t("navbar-contact")}
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
