import React from "react";
import PropTypes from "prop-types";
import './header.css';
import { Link } from 'gatsby'

import LogoImg from "../../images/logo.png"


const Header = ({ siteTitle }) => (
  <header className="main" style={{position: "absolute"}}>
    <Link id="header-logo-link" to="/">
        <h1><img src={LogoImg} id="header-logo" alt="maiko miyazaki logo" className="logo"/></h1>
    </Link>
    <div className="menu-wrapper">
        <div className="menu-icon" onclick="this.classList.toggle('hover');OpenNavigation(0)">
            <div className="menu-bar menu-bar-white menu-bar1"></div>
            <div className="menu-bar menu-bar-white menu-bar2"></div>
            <div className="menu-bar menu-bar-white menu-bar3"></div>
        </div>
    </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
