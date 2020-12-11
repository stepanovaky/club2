import React from "react";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

function NavDropdown(props) {
  const { change } = props;

  return (
    <div
      className={`nav-dropdown w100per absolute z1000 padding-side-10 nav-background ${
        change ? "nav-open" : "nav-closed"
      }`}
    >
      <NavbarLinks
        change={change}
        class="flex-column h350 flex-horizontal-space-evenly mar-side-15"
      />
    </div>
  );
}

export default NavDropdown;
