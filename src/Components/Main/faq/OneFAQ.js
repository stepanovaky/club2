import React, { useState } from "react";

function OneFAQ(props) {
  const [faqOpen, setFAQOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question">
        <p className="site-font f18 l26 weight600">{props.q.question}</p>
        <div className="faq-open mar-left-16">
          <div
            className={`faq-open-vertical ${
              faqOpen ? "faq-open" : "faq-closed"
            }`}
          ></div>
          <div className="faq-open-horizontal"></div>
        </div>
      </div>
    </div>
  );
}

export default OneFAQ;
