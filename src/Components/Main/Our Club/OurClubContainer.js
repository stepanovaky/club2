import React, { useState } from "react";
import Caption from "../../Caption/Caption";
import Heading from "../../Heading/Heading";
import OneClub from "./OneClub";
import { Link } from "react-router-dom";

function OurClubContainer() {
  const [disappearingLine1, setDisappearingLine1] = useState(true);
  const [appearingLine1, setAppearingLine1] = useState(false);
  const [disappearingLine2, setDisappearingLine2] = useState(true);
  const [appearingLine2, setAppearingLine2] = useState(false);

  const enterMouse1 = () => {
    setDisappearingLine1(false);
    setTimeout(disappear1, 250);
  };

  const enterMouse2 = () => {
    setDisappearingLine2(false);
    setTimeout(disappear2, 250);
  };

  const appear1 = () => {
    setDisappearingLine1(true);
  };
  const appear2 = () => {
    setDisappearingLine2(true);
  };

  const disappear1 = () => {
    setAppearingLine1(true);
  };
  const disappear2 = () => {
    setAppearingLine2(true);
  };

  const leaveMouse1 = () => {
    setAppearingLine1(false);
    setTimeout(appear1, 250);
  };
  const leaveMouse2 = () => {
    setAppearingLine2(false);
    setTimeout(appear2, 250);
  };

  return (
    <div className="lr-section padding-bottom-45">
      <div className="container padding-side-10">
        <div className="lr-div padding-top-bottom-20">
          <OneClub pic="{}" alt="" class="padding-right-21 padding-left-15" />
          <div className="padding-side-15 padding-top-40">
            <Caption class="site-font" text="Join the club" />
            <Heading
              class="site-font padding-top-20 padding-bottom-15"
              text="Our Club"
            />
            <div className="mar-top-15">
              <p className="site-font mar-bottom-10">
                Excepteur elit officia do tempor nisi fugiat magna esse.
              </p>
              <div
                onMouseEnter={enterMouse1}
                onMouseLeave={leaveMouse1}
                className="site-font w100 padding-right-10 padding-top-bottom-10 f15 l18 weight600"
              >
                <Link to="/about">Show More</Link>
                <div className="line-container relative">
                  <div
                    className={` absolute ${
                      disappearingLine1
                        ? "line-disappear-open"
                        : "line-disappear-closed"
                    }`}
                  ></div>
                  <div
                    className={`absolute ${
                      appearingLine1 ? "line-appear-open" : "line-appear-closed"
                    }  `}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rl-div padding-top-bottom-20">
          <OneClub pic="{}" alt="" class="padding-right-21 padding-left-15" />
          <div className="padding-side-25 padding-top-40">
            <Caption class="site-font" text="Tempor excepteur" />
            <Heading
              class="site-font padding-top-20 padding-bottom-15"
              text="Ipsum ipsum"
            />
            <div className="mar-top-15">
              <p className="site-font mar-bottom-10">
                Excepteur elit officia do tempor nisi fugiat magna esse.
              </p>
              <div
                onMouseEnter={enterMouse2}
                onMouseLeave={leaveMouse2}
                className="site-font w100 padding-right-10 padding-top-bottom-10  f15 l18 weight600"
              >
                <Link to="/about">Show More</Link>
                <div className="line-container relative">
                  <div
                    className={` absolute ${
                      disappearingLine2
                        ? "line-disappear-open"
                        : "line-disappear-closed"
                    }`}
                  ></div>
                  <div
                    className={`absolute ${
                      appearingLine2 ? "line-appear-open" : "line-appear-closed"
                    }  `}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClubContainer;
