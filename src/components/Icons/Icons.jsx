import React from "react";
import GitHub from "./IconSVGs/GitHub";
import LinkedIn from "./IconSVGs/LinkedIn";
import Instagram from "./IconSVGs/Instagram";
import Twitter from "./IconSVGs/Twitter";
import FaceBook from "./IconSVGs/FaceBook";

const list = {
  GitHub: GitHub,
  LinkedIn: LinkedIn,
  Instagram: Instagram,
  Twitter: Twitter,
  FaceBook: FaceBook,
};

const Icons = ({ name = "FaceBook" }) => {
  const Icon = list[name];

  return (
    <span className={name}>
      <Icon />
    </span>
  );
};

export default Icons;
