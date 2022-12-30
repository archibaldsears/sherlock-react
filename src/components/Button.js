import '../css/Button.scss'
import PropTypes from 'prop-types'
import { MDBBtn } from 'mdb-react-ui-kit';

const Button = ({ Text , Color, Type, onClick}) => {


  return (
    <MDBBtn color="primary" outline onClick={onClick} className={[Color, Type].join(' ') + 'btn-capitalize text-capitalize btn-lg'} >{Text}</MDBBtn>
  )

}

Button.defaultProps = {
  Text: 'Learn More',
  Color: 'secondary',
  type: 'Outline'
}
  
  Button.propTypes = {
    Text: PropTypes.string,
    Color: PropTypes.string,
    Type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button