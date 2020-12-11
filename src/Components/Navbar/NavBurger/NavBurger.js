import React from "react";
import { Icon } from "semantic-ui-react";

function NavBurger(props) {
  return (
    <div
      onClick={props.click}
      className="nav-burger cursor-pointer mar-side-25 mar-top-10"
    >
      <Icon name="content" size="big" />
    </div>
  );
}

export default NavBurger;
