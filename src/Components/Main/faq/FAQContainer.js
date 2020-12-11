import React from "react";
import Caption from "../../Caption/Caption";
import Heading from "../../Heading/Heading";
import OneFAQ from "./OneFAQ";
import { question1, question2, question3 } from "./faq-helper";

function FAQContainer() {
  return (
    <div className="faq offset-background padding-bottom-60 padding-top-65">
      <div className="container">
        <div className="title-bundle">
          <Caption class="text-center site-font" text="most asked" />
          <Heading
            class="text-center mar-top-bottom-15 site-font"
            text="Frequently Asked"
          />
        </div>
        <div className="faq-div">
          <div className="faq-left-div">
            <OneFAQ q={question1} />
            <OneFAQ q={question2} />
            <OneFAQ q={question3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQContainer;
