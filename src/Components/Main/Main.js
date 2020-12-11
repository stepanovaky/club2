import React from "react";
import Caption from "../Caption/Caption";
import Carousel from "./Carousel/Carousel";
import Heading from "../Heading/Heading";
import TeamMembers from "./Team/TeamMembers";
import FAQContainer from "./faq/FAQContainer";
import OurClubContainer from "./Our Club/OurClubContainer";
import TripleIcon from "./TripleIcon/TripleIcon";
import BackgroundImage from "./Main Background Components/BackgroundImage";

function Main() {
  return (
    <div className="main w100per">
      <BackgroundImage />
      <div className="icon-land padding-top-65 padding-side-10 ">
        <div className="feature-land">
          <div className="title-bundle mar-side-15 mar-bottom-40 ">
            <Caption text="what we do" class="text-center site-font" />
            <Heading
              text="Ipsum Mollit Laboris Sunt"
              class="site-font text-center"
            />
          </div>
          <TripleIcon />
        </div>
      </div>
      <OurClubContainer />
      <Carousel />
      <TeamMembers />
      <FAQContainer />
    </div>
  );
}

export default Main;
