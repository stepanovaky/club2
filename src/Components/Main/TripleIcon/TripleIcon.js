import React from "react";
import OneIcon from "./OneIcon";

function TripleIcon() {
  return (
    <div className="triple-icon flex-vertical-center flex-column padding-side-15">
      <OneIcon
        icon="paw"
        title="Lorem Ipsum"
        desc="Sit voluptate ut incididunt ut ex officia laboris nulla non anim
            magna."
      />
      <OneIcon
        icon="heart"
        title="Lorem Ipsum"
        desc="Sit voluptate ut incididunt ut ex officia laboris nulla non anim
            magna."
      />
      <OneIcon
        icon="trophy"
        title="Lorem Ipsum"
        desc="Sit voluptate ut incididunt ut ex officia laboris nulla non anim
            magna."
      />
    </div>
  );
}

export default TripleIcon;
