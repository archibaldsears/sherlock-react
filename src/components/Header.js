import sherlockLogo from "../images/sherlock-logo@4x.png";
import "../css/AppHeader.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({
  navOptions
}) => {

  const [btnState, setBtnState] = useState(false);

  
  const clickFunction = (e) => {
    setBtnState(btnState => !btnState);
    // document.getElementsByClassName("header-text").classList.remove(' active');
    if (!btnState) {e.currentTarget.classList.add('active')} else {e.currentTarget.classList.remove('active')}
  }

  

  

  return (
    <div className="Main-container">
      <header className="App-header paddingSH">
        <Link  to="sherlock-react" className=' link-secondary'>
          <p onClick={clickFunction} className="header-text">{navOptions.nav1}</p>
        </Link>

        <Link to={navOptions.nav2} className="link-secondary">
          <p onClick={clickFunction} className="header-text">{navOptions.nav2}</p>
        </Link>

        <Link to={navOptions.nav3} className="link-secondary">
          <p onClick={clickFunction} className="header-text">{navOptions.nav3}</p>
        </Link>
        
        <Link to="sherlock-react">
          <img src={sherlockLogo} alt="Sherlock Logo" />
        </Link>
        
        <Link to={navOptions.nav4} className="link-secondary">
          <p onClick={clickFunction} className="header-text">{navOptions.nav4}</p>
        </Link>

        <Link to={navOptions.nav5} className="link-secondary">
          <p onClick={clickFunction} className="header-text">{navOptions.nav5}</p>
        </Link>

        <Link to={navOptions.nav6} className="link-secondary">
          <p onClick={clickFunction} className="header-text">{navOptions.nav6}</p>
        </Link>
      </header>
    </div>
  );
};

Header.defaultProps = {
  option1: "arggg",
};

export default Header;
