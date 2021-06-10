import React from 'react'
import './footer.css'
import { Link } from 'gatsby'

const Footer = () => (
    <footer>
        <div className="footer-innter-container">
            <div className="footer-contents-section about-me-section">
                <div className="footer-contents-title"><h4>ABOUT ME</h4></div>
                <hr/>
                <div className="description">
                    <h5>Maiko Miyazaki</h5>
                    <p>My name is Maiko Miyazaki.
                        This static website is developed for a imaginary company called "Travel" which sells travel equipment. 
                        Created with HTML5, CSS3, Sass, plain JavaScript and jQuery.
                    </p>

                    <ul className="nav-link-list">
                        <li className="nav-link"><a href="/about.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <p className="menu-link-text">Read more about me</p></a></li>

                        <li className="nav-link"><a href="/blog.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <p className="menu-link-text">Read blog posts</p></a></li>

                        <li className="nav-link"><a href="/contact.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <p className="menu-link-text">Get in touch</p></a></li>
                    </ul>

                </div>
            </div>
            
            <div className="footer-contents-section project-section">

                <div className="footer-contents-title"><h4>PROJECTS</h4></div>
                <hr/>

                <ul className="project-list">
                    <li><a href="">Sales Prediction App
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github icon" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg></a></li>
                    <li><a href="">Vocab Note - Chrome Extension
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-up-right icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg></a></li>
                    <li><a href="">Your Best Song
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-up-right icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg></a></li>
                    <li><a href="">Tetris Web app
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-up-right icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg></a></li>
                </ul>

            </div>

            <div className="footer-contents-section twitter-timeline-section">
                <div className="footer-contents-title"><h4>TWITTER</h4></div>
                <hr/>
                <div className="timeline-container">
                    <a className="twitter-timeline" href="https://twitter.com/MaikoMiyazaki?ref_src=twsrc%5Etfw">Tweets by MaikoMiyazaki</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div>
        </div>
    </footer>
)
  
export default Footer
  