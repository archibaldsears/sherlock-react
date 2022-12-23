import '../css/Button.css'



const Button = ({ Text , Color, Type}) => {
    

  return (
    <button className={[Color, Type].join(' ')} >{Text}</button>
  )
}

export default Button