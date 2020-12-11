import React from "react";
import { Icon } from "semantic-ui-react";

function OneIcon(props) {
  return (
    <div className="one-icon flex-column padding-side-15 mar-bottom-50 flex-horizontal-center flex-vertical-center flex-horizontal-space-evenly">
      <div className="feature-top">
        <Icon size="huge" name={props.icon} />
        <div className="circle"></div>
      </div>
      <div className="feature-title f20 site-font mar-top-bottom-10">
        {props.title}
      </div>
      <div className="feature-desc text-center site-font mar-bottom-10">
        {props.desc}
      </div>
    </div>
  );
}

export default OneIcon;
