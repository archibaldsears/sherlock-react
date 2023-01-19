import React from "react";
import { MDBCol } from "mdb-react-ui-kit";
import Button from "../../components/Button";
import TextItemH3 from "../TextItems/TextItemH3";
import TextItemP from "../TextItems/TextItemP";

const TextCopyBtnCol = ({
  title,
  titleColor,
  copy,
  copyColor,
  btnText,
  isBtn,
  isBtnSecondary,
  btnTextSecondary,
  classes,
  mdNumberTxt,
  titleHighlighted,
}) => {

    
  return (
    <MDBCol
      md={mdNumberTxt}
      className="mb-9 mb-md-0 d-flex align-items-center p-4"
    >
      <div>
        <TextItemH3
          title={title}
          titleColor={titleColor}
          titleHighlighted={titleHighlighted}
        ></TextItemH3>

        <TextItemP copy={copy}></TextItemP>
        

        {btnText && <Button Text={btnText}></Button>}

        {btnTextSecondary && (
          <Button Text={btnTextSecondary} Type="secondary"></Button>
        )}
      </div>
    </MDBCol>
  );
};

TextCopyBtnCol.defaultProps = {
  title: "Learn More",
  copy: "secondary",
  classes: "mb-9 mb-md-0 d-flex align-items-center p-4",
  mdNumberTxt: "6",
  isBtn: false
};

export default TextCopyBtnCol;
