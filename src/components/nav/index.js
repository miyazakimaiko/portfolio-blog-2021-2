import React from 'react';
import { Link } from 'gatsby';
// import { window } from 'browser-monads';
import Featured from './featured'
import Topics from './topics'
import './nav.css';

const Nav = () => (
    <nav id="nav-screen">
        <ul className="nav-main-menu-link-list">
            <li className="main-menu-link">
                <Link to='/'><p className="main-menu-link-text">HOME</p></Link>
            </li>
            <li className="main-menu-link">
                <Link to='/about/'><p className="main-menu-link-text">ABOUT</p></Link>
            </li>
            <li className="main-menu-link">
                <Link to='/blog/'><p className="main-menu-link-text">BLOG</p></Link>
                <Topics />
            </li>
            <li className="main-menu-link">
                <Link to='/contact/'><p className="main-menu-link-text">CONTACT</p></Link>
            </li>
        </ul>

        <div className="popular-articles-container">
            <div className="title-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-triangle-fill triangle-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
                </svg>
                <h3 className="title">Popular Articles</h3>
            </div>
            <Featured />
        </div>{/* .popular-articles-container */}
    </nav>
)

export default Nav