import React from "react";
import Button from "../Button/Button";

function JoinUsButton() {
  return (
    <div className="button join-us">
      <Button
        value="Join Us"
        class="background-trans text-border-color button-join-us-shadow button-join-us-shadow-transition site-font button-border-color"
      />
    </div>
  );
}

export default JoinUsButton;
