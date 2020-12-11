import React from "react";
import BackgroundImageText from "./BackgroundImageText";
import whippetsBackground from "../../../Media/whippets-box-2.jpg";

function BackgroundImage() {
  return (
    <div className="background-image relative h600 w100per">
      <img
        className="background-image-bottom h600 absolute z1"
        src={whippetsBackground}
        alt="whippets from box 2"
      />
      <div className="background-image-overlay h600 z100 absolute"></div>
      <BackgroundImageText />
    </div>
  );
}

export default BackgroundImage;
