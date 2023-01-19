import "../css/Button.scss";
import PropTypes from "prop-types";
import { MDBBtn } from "mdb-react-ui-kit";

const Button = ({ Text, Color, Type, onClick }) => {
  switch (Type) {
    case "primary":
      return (
        <MDBBtn
          rippleColor="secondary"
          onClick={onClick}
          className={
            // [Color, Type].join(" ") +
            "btn-capitalize text-capitalize btn-lg mt-4 me-2 iso-class"
          }
        >
          {Text}
        </MDBBtn>
      );
      
    case "secondary":
      return (
        <MDBBtn
          color='tertiary' rippleColor='primary'
          onClick={onClick}
          className={
            // [Color, Type].join(" ") +
            "btn-capitalize text-capitalize btn-lg mx-2 px-4 iso-class"
          }
        >
          {Text}
        </MDBBtn>
      );
        
    default:
      return (
        <MDBBtn
          rippleColor="secondary"
          onClick={onClick}
          className={
            // [Color, Type].join(" ") +
            "btn-capitalize text-capitalize btn-lg mt-4 me-2 iso-class"
          }
        >
          {Text}
        </MDBBtn>
      );
      
  }

};

Button.defaultProps = {
  Text: "Learn More",
  Color: "secondary",
  type: "primary",
};

Button.propTypes = {
  Text: PropTypes.string,
  Color: PropTypes.string,
  Type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
