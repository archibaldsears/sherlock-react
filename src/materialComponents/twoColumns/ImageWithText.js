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
}) => {
  switch (direction) {
    case "textLeft":
      return (
        <MDBRow>
          <ImgCol image={image}></ImgCol>
          <TextCopyBtnCol
            title={title}
            copy={copy}
            btnText={btnText}
          ></TextCopyBtnCol>
        
        </MDBRow>
      );

    case "textRight":
      return (
        <MDBRow>
          <TextCopyBtnCol
            title={title}
            copy={copy}
            btnText={btnText}
          ></TextCopyBtnCol>
          <ImgCol image={image}></ImgCol>
        </MDBRow>
      );

    default:
      return (
        <MDBRow>
          <ImgCol image={image}></ImgCol>

          <TextCopyBtnCol
            title={title}
            copy={copy}
            btnText={btnText}
          ></TextCopyBtnCol>
        </MDBRow>
      );
  }
};

export default ImageWithText;
