import React from "react";

function Heading(props) {
  return (
    <div className={`heading mar-top-bottom-15 ${props.class}`}>
      {props.text}
    </div>
  );
}

export default Heading;
