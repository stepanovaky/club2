import React from "react";
import Caption from "../Caption/Caption";
import Heading from "../Heading/Heading";
import BackgroundImage from "./Main Background Components/BackgroundImage";

function Main() {
  return (
    <div className="main w500 h500">
      <BackgroundImage />
      <div className="icon-land padding-top-65 ">
        <Caption text="what we do" class="text-center" />
        <Heading text="Ipsum Mollit Laboris Sunt" class="text-center" />
      </div>
    </div>
  );
}

export default Main;
