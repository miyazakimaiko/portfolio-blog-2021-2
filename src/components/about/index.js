import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './about.css'

import store from '../../images/old-stores-second-floor.jpg';

const About = () => (
    <div class="inner-screen-container">
        <section className="article-header" style={{
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.3), 
                rgba(0, 0, 0, 0.3)), url(${store})`}}
        >
            <h1 className="page-title">
                About
            </h1>
        </section>
        <article>
            <div class="article-contents post-contents">
                <h2>About me</h2>
                <p><em><b>I'm Maiko Miyazaki, a Web Developer and apprentice Software Engineer living in Dublin, Ireland. I love to learn all things about Software development.</b></em></p>
                <StaticImage src="../../images/face.JPG" className="face right" alt="Maiko Miyazaki face picture"/>
                <p>As a self-taught web developer, I have created many personal projects and websites for clients using WordPress, PHP, JavaScript, and many other technologies.</p>
                <p>Currently I am taking software development apprenticeship programme organized by <a href="https://fit.ie/">FIT</a> who provide us both off and on-the-job training.
                    At the moment, I am taking off-the-job training full-time at <a href="https://whitehallcollege.com/">Whitehall College</a>.</p>

                <h2>About this website</h2>
                <p>This website is hosted on Netlify. For the front end, I used Gatsby and Sass.</p>
                <p>The pictures I'm using for the thumbnails are taken in my hometown, Yao prefecture in Osaka.</p>
            </div>
        </article>    
    </div>
)

export default About