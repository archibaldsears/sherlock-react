import '../css/Button.scss'
import PropTypes from 'prop-types'

const Button = ({ Text , Color, Type, onClick}) => {


  return (
    <button onClick={onClick} className={[Color, Type].join(' ')}>{Text}</button>
  )

}

Button.defaultProps = {
  Text: 'Learn More',
  Color: 'Black',
  type: 'Outline'
}
  
  Button.propTypes = {
    Text: PropTypes.string,
    Color: PropTypes.string,
    Type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button