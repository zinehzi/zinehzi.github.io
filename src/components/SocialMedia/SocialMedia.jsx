import React from "react";
import Icons from "../Icons/Icons";

const SocialMedia = () => {
  return (
    <ul className="navbar-nav" style={{marginLeft: "8px"}}>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Icons name="GitHub" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Icons name="LinkedIn" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Icons name="Instagram" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Icons name="Twitter" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Icons name="FaceBook" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
