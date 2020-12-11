import React from "react";
import Caption from "../../Caption/Caption";
import Heading from "../../Heading/Heading";
import OneFAQ from "./OneFAQ";

function FAQContainer() {
  return (
    <div className="faq">
      <div className="container">
        <div className="title-bundle">
          <Caption class="text-center site-font" text="most asked" />
          <Heading
            class="text-center mar-top-bottom-15 site-font"
            text="Frequently Asked"
          />
        </div>
        <div className="faq-div">
          <div className="faq-left-div"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQContainer;
