import React from "react";

function Button(props) {
  return (
    <div className="button">
      <input
        type="button"
        onClick={props.click}
        value={props.value}
        className={`cursor-pointer button-padding button-solid-clicked-border border-radius-3 f15 l21 weight700 site-font ${props.class}`}
      />
    </div>
  );
}

export default Button;
