import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import sherlockLogo from "../../images/sherlock-logo@4x.png";
import "../../css/MaterialNavbar.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function NavBarItem(props) {
    // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: 'underline',
    
  };

  let activeClassName = "nav-link selected";
  let normalClassName = "nav-link"
  return (
    <MDBNavbarItem className="p-5">
          <NavLink
            to={props.link}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
            >
              {props.nav}

            </NavLink>
    </MDBNavbarItem>
  );
}

const MaterialNavbar = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [showNavCentred, setShowNavCentred] = useState(false);
  let text = {
    nav1: "Home",
    link1: "/sherlock-react",
    nav2: "About",
    link2: "/About",
    nav3: "Pipeline",
    link3: "/Pipeline",
    nav4: "Work",
    link4: "/Work",
    nav5: "Services",
    link5: "/Services",
    nav6: "Contact",
    link6: "/Contact",
  };

  return (
    <>
      <MDBNavbar
        className="navbar-custom"
        expand="lg"
        light
        bgColor="light"
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse
            navbar
            className="justify-content-center "
            show={showNavNoTogglerSecond}
          >
            <MDBNavbarNav className=" justify-content-center  mb-6 mb-lg-0">

              <NavBarItem 
              nav={text.nav1}
              link={text.link1} 
              ></NavBarItem>
              <NavBarItem 
              nav={text.nav2}
              link={text.link2} 
              ></NavBarItem>
              <NavBarItem 
              nav={text.nav3}
              link={text.link3} 
              ></NavBarItem>
              <Link to="sherlock-react">
              <MDBNavbarBrand
              >
              <img
              src={sherlockLogo}           
              alt=''
              loading='lazy'
              />
              </MDBNavbarBrand>
              </Link>
              <NavBarItem 
              nav={text.nav4}
              link={text.link4} 
              ></NavBarItem>
              <NavBarItem 
              nav={text.nav5}
              link={text.link5} 
              ></NavBarItem>
              <NavBarItem 
              nav={text.nav6}
              link={text.link6} 
              ></NavBarItem>
              



            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default MaterialNavbar;
