import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="words">
        <span className="word word-1">z</span>
        <div className="word-2">
          <span className="circle"></span>
          <span className="word">i</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
