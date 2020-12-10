import React from 'react';
import { Link } from 'react-router-dom';

function NavbarLinks() {

    return(
        <div className="navbar-links w250 flex-row flex-horizontal-right">
        <span className="navbar-home"><Link to="/">Home</Link></span>
        <span className="navbar-about"><Link to="/about">About</Link></span>
        <span className="navbar-registry"><Link to="/registry">Registry</Link></span>
        <span className="navbar-events"><Link to="/events">Events</Link></span>
        <span className="navbar-calendar"><Link to="/calendar">Calendar</Link></span>
        <span className="navbar-merchandise"><Link to="/merchandise">Merchandise</Link></span>
    </div>

    )
}

export default NavbarLinks