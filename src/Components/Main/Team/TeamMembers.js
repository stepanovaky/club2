import React from "react";
import Caption from "../../Caption/Caption";
import Heading from "../../Heading/Heading";
import OneMember from "./OneMember";
import JoinUsButton from "../../JoinUsButton/JoinUsButton";
import { memberHelper } from "./member-helper";

function TeamMembers() {
  return (
    <div className="team-members padding-top-65">
      <div className="container">
        <div className="title-bundle mar-side-15 mar-bottom-40">
          <Caption text="team" class="text-center site-font" />
          <Heading
            text="Our Members"
            class="text-center site-font mar-top-20 mar-bottom-15"
          />
        </div>
        <div className="member">
          <OneMember member={memberHelper} />
        </div>
        <div className="member-sidebar padding-side-15">
          <div className="sidebar-div mar-bottom-75">
            <div className="mar-right-6 mar-bottom-15">
              <div className="join-team-outer">
                <div className="join-team-inner">
                  <div className="padding-side-20 padding-top-25 padding-bottom-31">
                    <div className="mar-bottom-20 flex-column flex-horizontal-center">
                      <h2 className="h29 text-center site-font mar-bottom-5">
                        Logo
                      </h2>
                      <h2 className="f20 site-font text-center l28 weight600 mar-top-bottom-10">
                        Join the team.
                      </h2>
                      <p className="f15 text-center site-font l23 mar-bottom-10">
                        Culpa labore nulla aliqua ad velit proident consectetur
                        nostrud ullamco ad qui et exercitation.
                      </p>
                      <div className="auto-margin">
                        <JoinUsButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
