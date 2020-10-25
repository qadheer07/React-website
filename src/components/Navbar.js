import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className={click ? "navbar mobile" : "navbar"} >
      <div className="navbar-container">
        <Link to="/" className={click ? "navbar-logo mob" : "navbar-logo"} onClick={closeMobileMenu}>
          {"\u00a0"}Gemelry <i className="fas fa-gem" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink exact to="/rubies" className="nav-links" activeClassName='nav-links-active' onClick={closeMobileMenu}>
              Ruby
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/sapphires" className="nav-links" activeClassName='nav-links-active' onClick={closeMobileMenu}>
              Sapphire
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/emeralds" className="nav-links" activeClassName='nav-links-active' onClick={closeMobileMenu}>
              Emerald
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
              Purchases
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign In
            </Link>
          </li>
        </ul>
        <ul className="signup">
          <li>
            {button && (
              <Button buttonStyle="btn--outline">
                {" "}
                <i className="fas fa-search"></i>{" "}
              </Button>
            )}
          </li>
          <li>
            {button && (
              <Button buttonStyle="btn--outline">
                {" "}
                <i className="fas fa-shopping-cart"></i>{" "}
              </Button>
            )}
          </li>
          <li>{button && <Button to='/login'> Sign{"\u00a0"}In </Button>}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
