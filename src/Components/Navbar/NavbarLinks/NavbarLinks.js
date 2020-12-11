import React from "react";
import { Link } from "react-router-dom";

function NavbarLinks(props) {
  return (
    <div
      className={`w250 f15 l21 weight600 flex-row flex-horizontal-right ${props.class}`}
    >
      <span className={`navbar-home ${props.perLink}`}>
        <Link to="/">Home</Link>
      </span>
      <span className={`navbar-about ${props.perLink}`}>
        <Link to="/about">About</Link>
      </span>
      <span className={`navbar-registry ${props.perLink}`}>
        <Link to="/registry">Registry</Link>
      </span>
      <span className={`navbar-events ${props.perLink}`}>
        <Link to="/events">Events</Link>
      </span>
      <span className={`navbar-calendar ${props.perLink}`}>
        <Link to="/calendar">Calendar</Link>
      </span>
      <span className={`navbar-merchandise ${props.perLink}`}>
        <Link to="/merchandise">Merchandise</Link>
      </span>
    </div>
  );
}

export default NavbarLinks;
