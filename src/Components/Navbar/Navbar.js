import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavDropdown from "./NavDropdown/NavDropdown";
import LargeLogo from "../Logo/LargeLogo";
import JoinUsButton from "../JoinUsButton/JoinUsButton";
import NavBurger from "./NavBurger/NavBurger";

function Navbar() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="nav padding-top-14 padding-bottom-16 l100">
      <nav className="navbar padding-side-10">
        <div className="nav-width padding-left-15 flex-row flex-horizontal-space-between">
          <div className="h29 w250">
            <LargeLogo />
          </div>
          <div className="navbar-links">
            <NavbarLinks />
          </div>
          <div className="flex-row">
            <JoinUsButton />
            <NavBurger click={toggleNavVisibility} />
          </div>
        </div>
      </nav>
      <NavDropdown change={navVisible} />
    </div>
  );
}

export default Navbar;
