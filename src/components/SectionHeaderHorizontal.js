import React from "react";
import Button from "./Button";

const SectionHeaderHorizontal = (props) => {
  return (
    <div className="section-header-horizontal">
      <img src={props.Img2} alt="" />
      <div>
        <img className="Pipeline-logo" src={props.Logo} alt="" />
        <p className="bigger">
          {props.text}
        </p>
        <Button Text="hello" />
      </div>
      <img src={props.Img1} alt="" />
    </div>
  );
};

export default SectionHeaderHorizontal;
