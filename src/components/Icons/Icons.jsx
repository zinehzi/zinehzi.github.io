import React from "react";
import GitHub from "./IconSVGs/GitHub";
import LinkedIn from "./IconSVGs/LinkedIn";
import Instagram from "./IconSVGs/Instagram";
import Twitter from "./IconSVGs/Twitter";
import FaceBook from "./IconSVGs/FaceBook";
import Btt from "./IconSVGs/Btt";

const list = {
  GitHub: GitHub,
  LinkedIn: LinkedIn,
  Instagram: Instagram,
  Twitter: Twitter,
  FaceBook: FaceBook,
  Btt: Btt,
};

const Icons = ({ name = "FaceBook" }) => {
  const Icon = list[name];

  return (
    <span className={`icon ${name}`}>
      <Icon />
    </span>
  );
};

export default Icons;
