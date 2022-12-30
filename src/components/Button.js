import '../css/Button.scss'
import PropTypes from 'prop-types'
import { MDBBtn } from 'mdb-react-ui-kit';

const Button = ({ Text , Color, Type, onClick}) => {


  return (
    <MDBBtn onClick={onClick} className={[Color, Type].join(' ')}>{Text}</MDBBtn>
  )

}

Button.defaultProps = {
  Text: 'Learn More',
  Color: 'bg-primary',
  type: 'Outline'
}
  
  Button.propTypes = {
    Text: PropTypes.string,
    Color: PropTypes.string,
    Type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button