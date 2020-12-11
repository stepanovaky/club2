import React from "react";
import BackgroundImageText from "./BackgroundImageText";
import whippetsBackground from "../../../Media/whippets-box-2.jpg";

function BackgroundImage() {
  return (
    <div className="background-image relative w600 h600">
      <img
        className="background-image-bottom absolute z1"
        src={whippetsBackground}
        alt="whippets from box 2"
      />
      <div className="background-image-overlay z100 absolute"></div>
      <BackgroundImageText />
    </div>
  );
}

export default BackgroundImage;
