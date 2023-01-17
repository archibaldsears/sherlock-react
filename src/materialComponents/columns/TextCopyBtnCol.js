import React from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Button from "../../components/Button";
const TextCopyBtnCol = ({title, copy, btnText, classes, mdNumber}) => {
  return (
    <MDBCol md={mdNumber} sm="12" className={classes}>
      <h3 className="title">{title}</h3>
      <p className="bigger">{copy}</p>
      <Button Text={btnText}></Button>
    </MDBCol>
  );
};

TextCopyBtnCol.defaultProps = {
    title: "Learn More",
    copy: "secondary",
    btnText: "Outline",
    classes: "mb-4 p-4 align-self-center",
    mdNumber: "6"
  };

export default TextCopyBtnCol;
