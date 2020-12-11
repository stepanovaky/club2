import React from "react";

function Caption(props) {
  return (
    <div className="caption">
      <h2 className={`f13 l17 weight600 text-spacing-1 ${props.class}`}>
        {props.text}
      </h2>
    </div>
  );
}

export default Caption;
