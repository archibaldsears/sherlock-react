import sherlockLogo from '../images/sherlock-logo@4x.png'
import '../css/AppHeader.scss'
import { Link } from 'react-router-dom'


const Header = ({option1, option2, option3, option4, option5, option6}) => {
  return (
    <div className="Main-container">
    <header className="App-header paddingSH">
      <Link to='/'>
        <p>{option1}</p>
      </Link>

      <Link to={'/' + option2}>
        <p>{option2}</p>
      </Link>
    
      <Link to={'/' + option3}>
        <p>{option3}</p>
      </Link>
      <Link to='/'>
        <img src={sherlockLogo} alt='Sherlock Logo' />
      </Link>
      <Link to={'/' + option4}>
        <p>{option4}</p>
      </Link>
      <Link to={'/' + option5}>
        <p>{option5}</p>
      </Link>
      <Link to={'/' + option6}>
        <p>{option6}</p>
      </Link>
  </header>
  </div>
  )
}

Header.defaultProps = {
    option1: 'arggg'
}

export default Header