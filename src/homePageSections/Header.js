import sherlockLogo from '../images/sherlock-logo@4x.png'
import '../css/AppHeader.scss'
const Header = ({option1, option2, option3, option4, option5, option6}) => {
  return (
    <div className="Main-container">
    <header className="App-header paddingSH">
      <a href="/" >
        <p>{option1}</p>
      </a>
      <a href="/" >
        <p>{option2}</p>
      </a>        
      <a href="/">
        <p>{option3}</p>
      </a>
      <a href="/#">
        <img src={sherlockLogo} alt='Sherlock Logo' />
      </a>
      <a href="/">
        <p>{option4}</p>
      </a>
      <a href="/">
        <p>{option5}</p>
      </a>
      <a href="/">
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