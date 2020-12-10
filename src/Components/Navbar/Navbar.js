import React from "react";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import LargeLogo from "../Logo/LargeLogo";
import JoinUsButton from "../JoinUsButton/JoinUsButton";
import NavBurger from "./NavBurger/NavBurger";

function Navbar() {
  return (
    <div className="nav padding-top-14 padding-bottom-16 l100">
      <nav className="navbar padding-side-10">
        <div className="nav-width padding-left-15 w490 flex-row flex-horizontal-space-between">
          <div className="h29 w250">
            <LargeLogo />
          </div>
          <NavbarLinks />
          <div className="flex-row">
            <JoinUsButton />
            <NavBurger />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
