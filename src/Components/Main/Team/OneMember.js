import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function OneMember(props) {
  const [disappearingLine1, setDisappearingLine1] = useState(true);
  const [appearingLine1, setAppearingLine1] = useState(false);

  const enterMouse1 = () => {
    setDisappearingLine1(false);
    setTimeout(disappear1, 250);
  };

  const appear1 = () => {
    setDisappearingLine1(true);
  };

  const disappear1 = () => {
    setAppearingLine1(true);
  };

  const leaveMouse1 = () => {
    setAppearingLine1(false);
    setTimeout(appear1, 250);
  };

  return (
    <div className="one-member padding-side-15">
      <div className="padding-bottom-50">
        <div className="mar-right-6 mar-bottom-15">
          <div className="member-outer">
            <div className="member-inner">
              <Link to={props.member.show}>
                {/* <img src="" alt={props.member.alt} /> */}
              </Link>
            </div>
          </div>
          <h2 className="mar-top-bottom-10">{props.member.name}</h2>
          <div className="social mar-top-5 mar-bottom-15">
            <div className="facebook">
              <Link to={props.member.social.facebook}>
                <Icon
                  size=""
                  name={props.member.social.facebook === "" ? null : `facebook`}
                />
              </Link>
            </div>
          </div>
          <p className="mar-bottom-10">{props.member.desc}</p>
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
  );
}

export default OneMember;
