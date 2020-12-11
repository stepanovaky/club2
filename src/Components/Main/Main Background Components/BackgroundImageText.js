import React from "react";
import Button from "../../Button/Button";
import { useHistory } from "react-router-dom";

function BackgroundImageText() {
  const history = useHistory();
  const goJoin = () => {
    history.push("/join");
  };
  return (
    <div className="background-image-text mar-side-15 padding-side-10 flex-horizontal-space-around relative padding-top-bottom-100 flex-vertical-center flex-horizontal-center flex-column absolute overlay-text z900">
      <h1 className="f36 site-font slide-in-left1 text-center mar-top-20 mar-bottom-10 l48 site-font">
        Exercitation nisi Lorem ad ullamco.
      </h1>
      <p className="f25 l35 site-font slide-in-left2 text-center mar-top-25 mar-bottom-35 site-font">
        Ex fugiat et aliquip laboris consequat ex tempor commodo. Ad sint eu
        fugiat velit. Officia labore deserunt sit adipisicing in labore sunt
        esse est amet laborum magna consectetur.
      </p>
      <Button
        click={goJoin}
        value="Learn More"
        class="overlay-button site-font slide-in-left3 weight600 padding-side-32 padding-top-bottom-8 auto-margin background-trans"
      />
    </div>
  );
}

export default BackgroundImageText;
