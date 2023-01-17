import { motion } from "framer-motion";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Button from "../../components/Button";
import ImgCol from "../columns/ImgCol";
import TextCopyBtnCol from "../columns/TextCopyBtnCol";
import placeholder from "../../images/placeholder@4x.png";

// function ImgCol(props) {
//   return (
//     <MDBCol md="6" sm="12" className="mb-4 p-4 align-self-center">
//       <div>
//         <motion.img src={props.image}></motion.img>
//       </div>
//     </MDBCol>
//   );
// }

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
