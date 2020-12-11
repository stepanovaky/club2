import React from "react";
import { Link } from "react-router-dom";

function LargeLogo() {
  return (
    <div className="logo site-font w80">
      <Link to="/">
        <h2 className="">Logo</h2>
      </Link>
    </div>
  );
}

export default LargeLogo;
