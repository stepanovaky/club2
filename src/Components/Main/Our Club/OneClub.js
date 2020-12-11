import React from "react";
import { Link } from "react-router-dom";

function OneClub(props) {
  return (
    <div className="one-club padding-top-bottom-20">
      <div className="club-card padding-left-15 padding-right-21">
        <div className="club-outer">
          <div className="club-inner">
            <Link to="/about">
              {/* <img
              src={props.pic}
              alt={props.alt}
              className={`club-card-pic ${props.class}`}
            /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneClub;
