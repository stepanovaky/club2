import React from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

function JoinUsButton() {
  const history = useHistory();
  const goJoin = () => {
    history.push("/join");
  };

  return (
    <div className="button join-us">
      <Button
        click={goJoin}
        value="Join Us"
        class="padding-side-35 weight700  padding-top-bottom-9 background-trans text-border-color button-join-us-shadow button-join-us-shadow-transition site-font button-border-color"
      />
    </div>
  );
}

export default JoinUsButton;
