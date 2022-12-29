import sherlockLogo from '../images/sherlock-logo@4x.png'
import '../css/AppHeader.scss'
import { Link } from 'react-router-dom'


const Header = ({option1, option2, option3, option4, option5, option6}) => {
  return (
    <div className="Main-container">
    <header className="App-header paddingSH">
      <Link to='#/sherlock-react/'>
        <p>{option1}</p>
      </Link>

      <Link to={'#/sherlock-react/{option2}'}>
        <p>{option2}</p>
      </Link>
    
      <a href="#/">
        <p>{option3}</p>
      </a>
      <a href="#/">
        <img src={sherlockLogo} alt='Sherlock Logo' />
      </a>
      <a href="#/">
        <p>{option4}</p>
      </a>
      <a href="#/">
        <p>{option5}</p>
      </a>
      <a href="#/">
        <p>{option6}</p>
      </a>
  </header>
  </div>
  )
}

Header.defaultProps = {
    option1: 'arggg'
}

export default Header