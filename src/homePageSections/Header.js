import sherlockLogo from '../images/sherlock-logo@4x.png'

const Header = ({option1, option2, option3, option4, option5, option6}) => {
  return (
    <div className="Full-container">
    <header className="App-header">
    <a href="/">
      {option1}
    </a>
    <a href="/">
      {option2}
    </a>        
    <a href="/">
      {option3}
    </a>
    <a href="/">
      <img src={sherlockLogo} alt="" />
    </a>
    <a href="/">
      {option4}
    </a>
    <a href="/">
      {option5}
    </a>
    <a href="/">
      {option6}
    </a>
  </header>
  </div>
  )
}

Header.defaultProps = {
    option1: 'arggg'
}

export default Header