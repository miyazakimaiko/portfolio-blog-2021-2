import * as React from "react"
import Blogpagetopics from './blogpagetopics'
import Articles from './articles'
import './blog.css'

import ImgTrain from '../../images/chairs-in-the-platform.jpg';

const Blog = () => (
    <div className="inner-screen-container">
        <section className="article-header" style={{
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.3), 
                rgba(0, 0, 0, 0.3)), url(${ImgTrain})`}}
        >
            <h1 className="page-title">
                <span>What I learned from apprenticeship program,</span>
                <span>personal projects and books</span>
            </h1>
        </section>

        <div className="article-container">
            <Blogpagetopics />
            <Articles />
        </div> 
    </div>
)

export default Blog