import * as React from "react"
import { Link } from 'gatsby'
import './home.css'

const Home = () => (
    <div className="home-page">
        <div className="inner-container">
            <div className="company-logo"></div>
            <h2 className="catch-copy">Software engineer / Web developer</h2>
            <div className="button-container">
                <Link to="/about" className="custom-button about-button">
                    About
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-play-fill play-icon" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                </Link>
                <Link to="/blog" className="custom-button blog-button">
                    Blog
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-play-fill play-icon" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
)

export default Home