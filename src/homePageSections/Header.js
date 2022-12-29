import sherlockLogo from "../images/sherlock-logo@4x.png";
import "../css/AppHeader.scss";
import { Link } from "react-router-dom";

const Header = ({
  navOptions
}) => {
  return (
    <div className="Main-container">
      <header className="App-header paddingSH">
        <Link to="sherlock-react">
          <p>{navOptions.nav1}</p>
        </Link>

        <Link to={navOptions.nav2}>
          <p>{navOptions.nav2}</p>
        </Link>

        <Link to={navOptions.nav3}>
          <p>{navOptions.nav3}</p>
        </Link>
        <Link to="sherlock-react">
          <img src={sherlockLogo} alt="Sherlock Logo" />
        </Link>
        
        <Link to={navOptions.nav4}>
          <p>{navOptions.nav4}</p>
        </Link>

        <Link to={navOptions.nav5}>
          <p>{navOptions.nav5}</p>
        </Link>

        <Link to={navOptions.nav6}>
          <p>{navOptions.nav6}</p>
        </Link>
      </header>
    </div>
  );
};

Header.defaultProps = {
  option1: "arggg",
};

export default Header;
