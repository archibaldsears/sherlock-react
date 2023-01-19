import { MDBRow } from "mdb-react-ui-kit";
import ImgCol from "../columns/ImgCol";
import TextCopyBtnCol from "../columns/TextCopyBtnCol";

const ImageWithText = ({
  direction,
  image,
  title,
  copy,
  btnText,
  btnColor,
  btnType,
  btnLink,
  titleHighlighted,
  mdNumber
}) => {
  switch (direction) {
    case "textLeft":
      return (
        <div className="container my-5">
        <div className="row gx-lg-5 pt-5">
          <ImgCol image={image}></ImgCol>
          <TextCopyBtnCol
            title={title}
            copy={copy}
            btnText={btnText}
            titleHighlighted={titleHighlighted}
          ></TextCopyBtnCol>
        
        </div>
        </div>
      );

    case "textRight":
      return (
        <div className="container my-5">
        <div className="row gx-lg-5 pt-5">
          <TextCopyBtnCol
            title={title}
            titleHighlighted={titleHighlighted}
            copy={copy}
            btnText={btnText}
            mdNumber={mdNumber}
          ></TextCopyBtnCol>
          <ImgCol image={image}></ImgCol>
          </div>
        </div>
      );

    default:
      return (
        <div className="container my-5">
        <div className="row gx-lg-5 pt-5">
          <ImgCol image={image}></ImgCol>

          <TextCopyBtnCol
            title={title}
            copy={copy}
            btnText={btnText}
            titleHighlighted={titleHighlighted}
          ></TextCopyBtnCol>
        </div>
        </div>
      );
  }
};

export default ImageWithText;
