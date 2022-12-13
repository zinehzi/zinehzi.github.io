import React from "react";
import Icons from "../Icons/Icons";
import "./SocialMedia.scss";

const SocialMedia = ({className=""}) => {
  return (
    <ul className={`navbar-nav ${className}`}>
      <li className="nav-item">
        <a className="nav-link" target="blank" href="https://github.com/zinehzi">
          <Icons name="GitHub" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" target="blank" href="https://www.linkedin.com/in/zineh-ziaraty/">
          <Icons name="LinkedIn" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" target="blank" href="https://www.instagram.com/ziaraty.zi/">
          <Icons name="Instagram" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
