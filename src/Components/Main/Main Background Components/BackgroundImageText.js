import React from "react";
import Button from "../../Button/Button";
import { useHistory } from "react-router-dom";

function BackgroundImageText() {
  const history = useHistory();
  const goJoin = () => {
    history.push("/join");
  };
  return (
    <div className="background-image-text w500 h500 mar-top-25 flex-horizontal-space-around relative flex-vertical-center flex-horizontal-center flex-column absolute overlay-text z900">
      <h1 className="f36 text-center l48 site-font">
        Exercitation nisi Lorem ad ullamco.
      </h1>
      <p className="f25 l35 text-center site-font">
        Ex fugiat et aliquip laboris consequat ex tempor commodo. Ad sint eu
        fugiat velit. Officia labore deserunt sit adipisicing in labore sunt
        esse est amet laborum magna consectetur.
      </p>
      <Button
        click={goJoin}
        value="Learn More"
        class="overlay-button background-trans"
      />
    </div>
  );
}

export default BackgroundImageText;
